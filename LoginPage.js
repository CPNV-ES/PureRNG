import React, { Component } from 'react';

import {Text, View, Navigator, TouchableOpacity, TouchableHighlight} from 'react-native';

export default class LoginPage extends Component {
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <Navigator.NavigationBar style={{backgroundColor: '#f3f3f3', height:100 , alignItems: 'center'}}
                                             routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableHighlight
                    onPress={this.gotoNext.bind(this)}>
                    <Text style={{color: 'red'}}>YES</Text>
                </TouchableHighlight>
            </View>
        );
    }
    gotoNext() {
        this.props.navigator.push({
            id: 'MainPage',
            name: '主页',
        });
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return null;
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          HEAD PURE RNG OKO K
                </Text>
            </View>
        );
    }
};

module.exports = LoginPage;