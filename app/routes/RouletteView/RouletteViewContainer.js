import React, { Component } from 'react';
import RouletteView from './RouletteView';
import Routes from '../../config/routes';
import rouletteEvents from '../../utils/RouletteViewEvents';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class RouletteViewContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible:true,
            stake: null,
            color:'None selected',
            result: null,
            bet:{},
            user : {
                balance : 0,
            },
            users : [

            ]
        }

    }
    betChange(bet) {
        this.setState( {
            bet: {
                value: this.state.stake,
                color: this.state.color,
            },
            modalVisible:true,
        });
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
                betOnPress={this.betChange.bind(this)}
                colorChoice={this.state.color}
                stakeChoice={this.state.stake}
                onColorChange={this.colorChange.bind(this)}
                onStakeChange={this.stakeChange.bind(this)}
                betValue={this.state.bet.value}
                betColor={this.state.bet.color}
            >
                <View style={{marginTop: 22}}>
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}>
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text>Hello World!</Text>

                                <TouchableHighlight onPress={() => {
                                    this.setState({modalVisible:false})
                                }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </Modal>
                </View>



            </RouletteView>

        );
    }

};

RouletteViewContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default RouletteViewContainer;