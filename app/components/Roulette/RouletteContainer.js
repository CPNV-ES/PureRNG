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
     * Get random number provably fair from API
     * @returns {Promise.<U>|*|Promise.<TResult>}
     */
    getNumber() {
        return fetch('http://10.0.2.2:8887/roulette/getResult')
            .then((response) => response.json());
    }

    /**
     *  1.the server gives us the randomly generated number
     *  2. We set the SpinValue regarding this random number
     *  3. We Animate the wheel
     */
    // TODO : not onpress but time based (in the room)
    spinOnPress() {


        this.getNumber().then((number) => {
            this.setSpinValue(number);
            this.triggerAnimation(() => {
                console.warn('NICE THIS '+number);

            });
        });
    }

    /**
     * Each number has a different position
     *   (each is in a 40x40 square)
     * @param nb
     */

    setSpinValue(nb) {
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
            finalSpinValue:NumbersValue[nb],
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
                    toValue:-4000,
                    easing: Easing.in(Easing.ease),
                    duration:2000
                }),
            Animated.timing(
                this.state.spinValue,
                {
                    toValue:this.state.finalSpinValue,
                    duration:1000,
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
