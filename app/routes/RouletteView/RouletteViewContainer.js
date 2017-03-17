import React, { Component } from 'react';
import RouletteView from './RouletteView';
import Routes from '../../config/routes';
import RouletteContainer from '../../components/Roulette';
import rouletteEvents from '../../utils/RouletteViewEvents';
import RouletteColorsChoice from '../../components/RouletteColorsChoice';
import RouletteStakesChoice from '../../components/RouletteStakesChoice';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class RouletteViewContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible:false,
            stake: null,
            color:'None selected',
            result: null,
            user : {
                balance : 0,
            },
            users : [

            ]
        }

    }

    stakeChange(stake) {
        this.setState({ stake });
    }
    colorChange(color) {
        this.setState({ color });
    }

    render() {
        return (
            <RouletteView
                backHome={() => this.props.navigator.push(Routes.getHomeRoute())}
                spinOnPress={() => rouletteEvents.spinTrigger()}
                colorChoice={this.state.color}
                stakeChoice={this.state.stake}
                onColorChange={this.colorChange.bind(this)}
                onStakeChange={this.stakeChange.bind(this)}
            />

        );
    }

};

RouletteViewContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default RouletteViewContainer;