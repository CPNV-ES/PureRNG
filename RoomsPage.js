import React, { Component } from 'react';

import {Text, View, Navigator, TouchableOpacity} from 'react-native';

export default class RoomsPage extends Component {
    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: 'LoginPage',
            });
        }, 1000);
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32,}}>Rooms</Text>
            </View>
        );
    }
}

module.exports = RoomsPage;