import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableOpacity,Image} from 'react-native';

import RoomsPage from './RoomsPage';
import LoginPage from './LoginPage';
import SplashPage from './SplashPage';
import RoulettePage from './RoulettePage';


class App extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{id: 'SplashPage', name: 'Index'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }}
        />
    );
  }
    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'SplashPage') {
            return (
                <SplashPage
                    navigator={navigator}/>
            );
        }
        if (routeId === 'LoginPage') {
            return (
                <LoginPage
                    navigator={navigator}/>
            );
        }
        if (routeId === 'RoomsPage') {
            return (
                <RoomsPage
                    navigator={navigator}/>
            );
        }
        if (routeId === 'RoulettePage') {
            return (
                <RoulettePage
                    navigator={navigator}/>
            );
        }

        return this.noRoute(navigator);
    }
    noRoute(navigator) {
        return (
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                                  onPress={() => navigator.pop()}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>No routes initialized yet</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

/* STYLING */
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
/*END STYLING  */

AppRegistry.registerComponent('PureRNG', () => App);