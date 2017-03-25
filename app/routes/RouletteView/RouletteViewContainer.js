import React, {Component} from "react";
import RouletteView from "./RouletteView";
import Routes from "../../config/routes";
import rouletteEvents from "../../utils/RouletteViewEvents";
import {ToastAndroid, Text, TouchableHighlight, View} from "react-native";
import AsyncStorage from 'AsyncStorage';

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

    componentDidMount() {
        this.getUserinfo().then((id) => {
            this.setUserInfos(id);
        });
        // TODO GET BALANCE THROUGH API
        //this.getCurrentBalance().then(function(balance){
        //         self.setBalance(balance);
        //     });

    }

    componentDidUpdate() {
        // TODO GET BALANCE
        // TODO GET LATEST ROLLS
        //
    }

    betChange() {

        // Put values in bet
        this.setState({
                bet: {
                    value: this.state.stake,
                    color: this.state.color,
                }
                // Init of toast
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






    betRequest(){

        fetch('http://localhost:8887/roulette/bet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // TODO CHANGE NUMBER TO COLOR IN API
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
    stakeChange(stake) {
        this.setState({ stake });
    }
    colorChange(color) {
        this.setState({ color });
    }

    /* BALANCE
     *
     *
     *
     */

// Get user id from token
/////////////////////////////////
    getUserinfo() {
        return AsyncStorage.getItem('token', (err, result) => {
            return result;
        });
    }


// Method to set the user id
//////////////////////////////
    setUserInfos(id) {
        this.setState({
            user: {id, balance:150}
        })
    };

// TODO : UPDATE WITH API
// Get user balance from api
/////////////////////////////////
    getCurrentBalance() {
        // return fetch('http://localhost:8887/users/getAmount&userid='+this.state.user.id)
        //    .then((response) => response.json()).then((responseJson) => {
        //        return responseJson;
        //    });
    }

    updateBalance(newBalance){

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
                betColor={this.state.bet.color}
            >



            </RouletteView>

        );
    }

};

RouletteViewContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default RouletteViewContainer;