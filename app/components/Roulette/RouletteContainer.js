import React, { Component} from 'react';
import Roulette from './Roulette';
import { StyleSheet, View, Animated, Easing} from 'react-native';
import rouletteEvents from '../../utils/RouletteViewEvents';
import styles from './styles';




class RouletteContainer extends Component {

    constructor (props) {
        super(props);

        // Set the animation container
        this.state = {
            spinValue: new Animated.Value(1),
            finalSpinValue:0,
        };

        this.spinOnPress = this.spinOnPress.bind(this);
        // callback to access the method outside of the roulette component
        rouletteEvents.setSpinEvents(this.spinOnPress);
    }
    getNumber() {
        return fetch('http://172.17.101.184:8887/roulette/getResult')
            .then((response) => response.json()).then((responseJson) => {
                return responseJson;
        });
    }

    // TODO : not onpress but time based (in the room)
    spinOnPress() {
        const self = this;
        // 1.the server gives us the randomly generated number
        // 2. We set the SpinValue regarding this random number
        // 3. We Animate the wheel
        this.getNumber().then(function(number){
            self.setSpinValue(number);
            self.triggerAnimation();
        });
    }
    componentDidMount() {
        this._interval = setInterval(() => {
            // Your code
        }, 5000);
    }


    // Each number has a different position
    // (each is in a 40x40 square)
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
    triggerAnimation(cb){
        Animated.sequence([
            Animated.timing(
            // Animate 4000 pixels to make the animation smoother
                this.state.spinValue,
                {
                    toValue:-4000,
                    easing: Easing.in(Easing.ease),
                    duration:2000
                }),
            // To the random number
            Animated.timing(
                this.state.spinValue,
                {
                    toValue:this.state.finalSpinValue,
                    duration:1000,
                    easing: Easing.out(Easing.ease)
                })
        ]).start(cb);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    // Apply this style to the container of the roulette
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
