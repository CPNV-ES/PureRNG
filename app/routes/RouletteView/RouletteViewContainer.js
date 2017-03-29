import React, {Component} from "react";
import RouletteView from "./RouletteView";
import Routes from "../../config/routes";
import rouletteEvents from "../../utils/RouletteViewEvents";
import {ToastAndroid, Text, TouchableHighlight, View} from "react-native";
import AsyncStorage from 'AsyncStorage';
import SocketIOClient from 'socket.io-client/dist/socket.io';


/**
 * Handles betting / stake choice / color choice / balance
 */
class RouletteViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stake: null,
            color: 'None selected',
            result: null,
            bet: {},
            user: {},
            users: []
        }
    }

    componentWillMount(){
        this.getUserinfo().then((id) => {
            this.setUserInfos(id);
        });


        this.getCurrentBalance().then((balance) => {
            this.setState(s => ({
                user : {
                    ...s.user,
                    balance
                }
            }));
        });

        this.socket =  SocketIOClient('http://172.17.101.184:8877');
        this.socket.emit('joinRoom', this.props.roomNumber, this.props.userId);

    }
    componentWillUnmount(){
        this.socket.disconnect();
    }


    /**
     * Betting view process
     */
    betChange() {

        this.setState({
                bet: {
                    value: this.state.stake,
                    color: this.state.color,
                }
            }
            , () => {
                this.betToast();
            },
            this.setState({
                user: {
                    balance: this.state.user.balance - (this.state.stake),
                }
            }),() => {
                this.betRequest();
            })
    }


    /**
     * Bet request towards API
     */
    betRequest(){
        fetch('http://172.17.101.184:8887/roulette/bet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                stake: this.state.bet.value,
                color: this.state.bet.color,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson != null){
                    console.warn(responseJson);
                }
            })
            .catch(err => {
                throw err;
            })
    }

    /**
     * Show toast with bet info
     */
    betToast(){
        if (this.state.bet.value !== undefined && this.state.bet.color !== undefined && this.state.bet.value !== null && this.state.bet.color !== 'None selected'){

            ToastAndroid.showWithGravity(
                'You just bet '+ this .state.bet.value + ' on the color ' + this.state.bet.color,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        } else {
            ToastAndroid.showWithGravity(
                'Please select a color and a stake before betting',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        };
    }


    /**
     * Stake binding
     * between container and view
     * @param stake
     */
    stakeChange(stake) {
        this.setState({ stake });
    }

    /**
     * colorchoice binding
     * between container and view
     * @param color
     */
    colorChange(color) {
        this.setState({ color });
    }


    /**
     * Get user id from token
     * @returns {*|token of current user}
     */
    getUserinfo() {
        return AsyncStorage.getItem('token', (err, result) => {
            return result;
        });
    }


    /**
     * id passed to state.user.id
     * @param id
     */
    setUserInfos(id) {
        this.setState({
            user: {id}
        })
    };

    /**
     * get user balance from api
     * @returns {Promise. user balance}
     */
    getCurrentBalance() {
        return AsyncStorage.getItem('token')
            .then((token) => fetch('http://172.17.101.184:8887/users/getAmount', {
                method: 'POST',
                headers: {
                    'x-access-token': token
                },
            }))
            .then((response) => response.json());
    }

    render() {
        return (
            <RouletteView
                backHome={() => this.props.navigator.push(Routes.getHomeRoute())}
                spinOnPress={() => rouletteEvents.spinTrigger()}
                betOnPress={() => (this.betChange(this))}
                currentBalance={this.state.user.balance}
                colorChoice={this.state.color}
                stakeChoice={this.state.stake}
                onColorChange={this.colorChange.bind(this)}
                onStakeChange={this.stakeChange.bind(this)}
                betValue={this.state.bet.value}
                betColor={this.state.bet.color}/>
        );
    }
};

RouletteViewContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default RouletteViewContainer;
