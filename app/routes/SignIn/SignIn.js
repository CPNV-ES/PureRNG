import React, { Component } from 'react';
import { Text, View , Image, TextInput} from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import styles from './styles';

/**
 * Signin page display
 * @param props
 * @returns {XML}
 * @constructor
 */
const SignIn = (props) => {
    const bg = images.homeBg;
    let pic = images.logo;
    const {updateState} = props;

    return (

        <View style={styles.MainView}>
            <View  elevation={5} style={styles.top}>
                <View style={styles.head}>
                    <Image source={pic} style={{width: 240, height: 85}} />
                </View>
            </View>
            <View style={styles.bgImageWrapper}>
                <Image source={bg} style={styles.backgroundImage} />
            </View>
            <View style={styles.Signs}>
                <View style={styles.usernameView}>
                    <Text style={styles.lblSignUp}>
                        Username :
                    </Text>
                    <TextInput
                        style={styles.txtSignUp}
                        onChangeText={(signInUsername) => updateState({signInUsername})}
                    />
                </View>
                <View style={styles.usernameView}>
                    <Text style={styles.lblSignUp}>
                        Password :
                    </Text>
                    <TextInput secureTextEntry={true}
                               style={styles.txtSignUp}
                               onChangeText={(signInPassword) => updateState({signInPassword})}
                    />
                </View>
                <Button
                    title="Send"
                    text="Sign in"
                    onPress={props.SignInPress}
                />
            </View>

            <View style={styles.Signs}>
                <View style={styles.usernameView}>
                    <Text style={styles.lblSignUp}>
                        Username :
                    </Text>
                    <TextInput
                        style={styles.txtSignUp}
                        onChangeText={(signUpUsername) => updateState({signUpUsername})}
                    />
                </View>
                <View style={styles.usernameView}>
                    <Text style={styles.lblSignUp}>
                        Password :
                    </Text>
                    <TextInput secureTextEntry={true}
                               style={styles.txtSignUp}
                               onChangeText={(signUpPassword) => updateState({signUpPassword})}
                    />
                </View>
                <Button
                    title="Send"
                    text="Sign up"
                    onPress={props.SignUpPress}
                />
            </View>

            <View style={styles.logcontent}>
                <View style={styles.MainViewContent}>
                    <Text>Sign in page - you are disconnected </Text>
                    <Button
                        text="tap here to connect"
                        onPress={props.SignInPress}
                    />
                </View>
            </View>
        </View>
    );
};

SignIn.propTypes = {
    updateState: React.PropTypes.func,
    SignInPress: React.PropTypes.func,
    SignUpPress: React.PropTypes.func,
}

export default SignIn;
