import React, { Component} from 'react';
import Roulette from './Roulette';
import Routes from '../../config/routes';
import { StyleSheet, View, Animated, TouchableOpacity, Text } from 'react-native';
import Dimensions from 'Dimensions';
import rouletteEvents from '../../utils/RouletteViewEvents';

const {
    width,
    height
} = Dimensions.get('window');

const SQUARE_DIMENSIONS = 30;
const SPRING_CONFIG = {tension: 2, friction: 3}; //Soft spring
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});


class RouletteContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {pan: new Animated.ValueXY()};
        this.spinOnPress = this.spinOnPress.bind(this);
        rouletteEvents.setSpinEvents(this.spinOnPress);
    }

    spinOnPress() {
        // Animate the update
        this.triggerAnimation();
        // this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }
    triggerAnimation(cb){
        Animated.sequence([
            Animated.spring(this.state.pan, {
                ...SPRING_CONFIG,
                toValue: {x: width - SQUARE_DIMENSIONS, y: height - SQUARE_DIMENSIONS} // animated to bottom right
            }),
            Animated.spring(this.state.pan, {
                ...SPRING_CONFIG,
                toValue: {x: width - SQUARE_DIMENSIONS, y: 0} //animate to top right
            }),
            Animated.spring(this.state.pan, {
                ...SPRING_CONFIG,
                toValue: {x: 0, y: 0} // return to start
            })
        ]).start(cb);
    }
    getStyle() {
        return [
            styles.square,
            {
                transform: this.state.pan.getTranslateTransform()
            }
        ];
    }
    render() {

        return (
            <View style={styles.container}>

                <Animated.View style={this.getStyle()} />
                <Roulette/>
            </View>
        );

    }
};


RouletteContainer.propTypes = {
    spinOnPress: React.PropTypes.func,
};

export default RouletteContainer;