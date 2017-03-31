import React, {Component} from "react";
import RouletteView from "./RouletteView";
import Routes from "../../config/routes";
import rouletteEvents from "../../utils/RouletteViewEvents";
import {ToastAndroid, Text, TouchableHighlight, View} from "react-native";
import AsyncStorage from 'AsyncStorage';
import SocketIOClient from 'socket.io-client/dist/socket.io';
import settings from '../../config/settings';

/**
 * Handles betting / stake choice / color choice / balance
 */
class RouletteViewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stake: null,
            color: 'None selected',
            disabled:false,
            result: null,
            bet: {},
            user: {},
            users: []
        }
    }

    componentWillMount(){
        this.getCurrentBalance().then((balance) => {
            this.setState(s => ({
                user : {
                    ...s.user,
                    balance
                }
            }));
        });

        /**
         * Connect to the room
         */
        this.socket =  SocketIOClient(settings.socket+"1");

        /**
         * Room joined
         */
        this.socket.emit('joinRoom', this.props.roomNumber, this.props.user.name);



        /**
         * Activate bet (begining of the 60 sec session)
         */
        this.socket.on('activateBet', () => {
            console.warn('activatebet');
            this.setState({
                disabled:false,
            })
        });


        /**
         * Stop the bet ( 52sec into the room )
         */
        this.socket.on('stopBet', () => {
            console.warn('stopbet');
            this.setState({
                disabled:true,
            })
        });

        /**
         * Spin the roulette with the random given number
         */
        this.socket.on('startRoulette', (randomNumber) => {
            console.warn('startroulette');
            rouletteEvents.spinTrigger(randomNumber);
        });

        /**
         * Update the balance after bet
         */
        this.socket.on('updateBalance', (amount) => {
            console.warn('updateBalance');
            this.setState(s => ({
                user : {
                    ...s.user,
                    balance:amount,
                }
            }));
        });


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
                },
                user: {
                    balance: this.state.user.balance,
                }
            },
            () => {
                if (this.state.user.balance > this.state.stake) {
                    this.setState({
                        user: {
                            balance: this.state.user.balance - (this.state.stake),
                        }
                    });
                    this.betToast();
                    this.betRequest();
                } else {
                ToastAndroid.showWithGravity(
                    'not enough balance ',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                )}
            }
            )
    }


    /**
     * Bet request towards API
     */
    betRequest(){
        this.socket.emit('bet',this.props.user.id, this.state.bet.value, this.state.bet.color);
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
     * get user balance from api
     * @returns {Promise. user balance}
     */
    getCurrentBalance() {
        return AsyncStorage.getItem('token')
            .then((token) => fetch(settings.server+'users/balance', {
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
                betDisabled={this.state.disabled}
                betValue={this.state.bet.value}
                betColor={this.state.bet.color}/>
        );
    }
};

RouletteViewContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default RouletteViewContainer;
