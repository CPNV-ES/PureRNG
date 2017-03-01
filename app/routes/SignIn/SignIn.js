import React, { Component } from 'react';
import { Text, View , Image, TextInput} from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import styles from './styles';
import Accordion from 'react-native-collapsible/Accordion';



const SignIn = (props) => {
    const bg = images.homeBg;
    let pic = images.logo;
    // const {onDetailsPress} = props;
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

const SECTIONS = [{}];

/* Accordion to display game choice */
class AccordionSignin extends Component {

    _renderHeader(section) {
        return (
            <View style={styles.SignIn}>
                <Text style={styles.headerText}>Sign in</Text>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={styles.SignContent}>
                <View style={styles.usernameView}>
                    <Text style={styles.lblUsername}>
                        Username :
                    </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    />
                </View>

                <View style={styles.usernameView}>
                    <Text style={styles.lblUsername}>
                        Password :
                    </Text>
                    <TextInput secureTextEntry={true}
                               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <Accordion
                sections={SECTIONS}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        );
    }
}

/* Accordion to display game choice */
class AccordionSignup extends Component {
    _renderHeader(section) {
        return (
            <View style={styles.SignUp}>
                <Text style={styles.headerText}>Sign up</Text>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={styles.SignContent}>
                <View style={styles.usernameView}>
                    <Text style={styles.lblSignUp}>
                        Username :
                    </Text>
                    <TextInput
                      style={styles.txtSignUp}
                      onChangeText={(username) => updateState({username})}
                    />
                </View>

                <View style={styles.usernameView}>
                    <Text style={styles.lblSignUp}>
                        Password :
                    </Text>
                    <TextInput secureTextEntry={true}
                               style={styles.txtSignUp}
                               onchangeText={(password) => this.setState({password})}
                    />
                </View>



            </View>
        );
    }

    render() {
        return (
            <Accordion
                sections={SECTIONS}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        );
    }
}

SignIn.propTypes = {
    updateState: React.PropTypes.func,
    SignInPress: React.PropTypes.func,
    SignUpPress: React.PropTypes.func,
}


export default SignIn;
