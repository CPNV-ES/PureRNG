import React, { Component} from 'react';
import Roulette from './Roulette';
import { StyleSheet, View, Animated, Easing} from 'react-native';
import rouletteEvents from '../../utils/RouletteViewEvents';
import styles from './styles';


/**
 *  Set the animation container - default animation value
 *  finalSpinValue will be the value where to wheel stops
 */

class RouletteContainer extends Component {

    constructor (props) {
        super(props);

        this.state = {
            spinValue: new Animated.Value(1),
            finalSpinValue:0,
        };

        this.spinOnPress = this.spinOnPress.bind(this);

        rouletteEvents.setSpinEvents(this.spinOnPress);
    }

    /**
     *  1.the server gives us the randomly generated number
     *  2. We set the SpinValue regarding this random number
     *  3. We Animate the wheel
     */
    spinOnPress(number) {

            this.setSpinValue(number);
            this.triggerAnimation();
    }

    /**
     * Each number has a different position
     *   (each is in a 40x40 square)
     * @param nb
     */

    setSpinValue(number) {
        const NumbersValue = {
            9: 405,
            7: 365,
            8: 325,
            1: 285,
            14: 245,
            2: 205,
            13: 165,
            3: 125,
            12: 85,
            4: 45,
            0: 0,
            11: -45,
            5: -85,
            10: -125,
            6: -165,
        };


        this.setState({
            finalSpinValue:NumbersValue[number],
        })

    };


    /**
     * Begin spin animation
     * @param cb
     */
    triggerAnimation(cb){
        Animated.sequence([
            Animated.timing(
                this.state.spinValue,
                {
                    toValue:-3000,
                    easing: Easing.in(Easing.ease),
                    duration:2000
                }),
            Animated.timing(
                this.state.spinValue,
                {
                    toValue:this.state.finalSpinValue,
                    duration:1500,
                    easing: Easing.out(Easing.ease)
                }),

        ]).start(cb);
    }

    /**
     * Apply style to roulette container
     */
    getStyle(){
        return [
            styles.container,
            {
                transform : [
                    {
                        translateX:this.state.spinValue
                    },
                ],
                width : 8050,
            }
        ]
    }

    render() {
        return (
            <Animated.View style={this.getStyle()}>
                <Roulette style={{resizeMode: 'cover'}}/>
            </Animated.View>

        );

    }
};

RouletteContainer.propTypes = {
    spinOnPress: React.PropTypes.func,
};

export default RouletteContainer;
