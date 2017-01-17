import React, { Component } from 'react';

import {Text, View, Navigator, TouchableOpacity, TouchableHighlight, Image, StyleSheet} from 'react-native';
import AwesomeButton from 'react-native-awesome-button';
import Button from './app/components/Button';
import Navbar from './app/components/NavBar';

export default class LoginPage extends Component {
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

    render(route, navigator, props){

        let pic = require('./app/images/full_logo.png');
        return (
            // Home view
            <View style={styles.logpage}>
                <View style={styles.bgImageWrapper}>
                    <Image source={require('./app/images/bg.png')} style={styles.backgroundImage} />
                </View>


                <Navbar/>


                <Button/>




                <View style={styles.logcontent}>
                    {/*<View style={styles.buttonww}>*/}
                        {/* BUTTON */}
                        {/*<AwesomeButton*/}
                            {/*backgroundStyle={styles.backgroundbutton}*/}
                            {/*labelStyle={styles.loginButtonLabel}states={{*/}
                            {/*default: {*/}
                                {/*text: 'Login',*/}
                                {/*onPress: this.handleButtonPress,*/}
                                {/*backgroundColor: 'transparent',*/}
                                {/*color:'black'*/}
                            {/*}*/}
                        {/*}} />*/}
                    {/*</View>*/}
                    <Button
                        text="Details"
                       //onPress={props.onDetailsPress}
                    />
                    {/*<View style={styles.buttonww}>*/}
                        {/*<AwesomeButton*/}
                            {/*backgroundStyle={styles.backgroundbutton}*/}
                            {/*labelStyle={styles.loginButtonLabel}*/}

                            {/*states={{*/}

                            {/*default: {*/}
                                {/*text: 'Register',*/}
                                {/*onPress: this.handleButtonPress,*/}
                                {/*backgroundColor: 'transparent',*/}
                                {/*color:'#030303'*/}
                            {/*}*/}
                        {/*}} />*/}
                    {/*</View>*/}

                    <Button
                        text="Details"
                        //onPress={props.onDetailsPress}
                    />
                </View>
            </View>

        );
    }
}

/* STYLING */
let styles = StyleSheet.create({
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    logpage:{
        flex:1,

    },
    backgroundImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    logcontent:{
    flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },

});
/*END STYLING  */

module.exports = LoginPage;