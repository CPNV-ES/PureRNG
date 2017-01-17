import React, { Component } from 'react';

import {Text, View, Navigator, TouchableOpacity, Image} from 'react-native';


export default class SplashPage extends Component {
    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: 'LoginPage',
            });
        }, 100);
    }
    render() {
        let pic = require('./app/images/Splash.png');
        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={pic} style={{width: 100, height:100 }} />
                <Text>
                   Welcome to PureRNG
                </Text>
            </View>
        );
    }
}
