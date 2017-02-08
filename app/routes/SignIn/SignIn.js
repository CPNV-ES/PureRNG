import React from 'react';
import { Text, View , Image} from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import styles from './styles';
import Navbar from '../../components/NavBar';

const SignIn = (props) => {
    const bg = images.homeBg;
    let pic = images.logo;
    // const {onDetailsPress} = props;
    return (

        <View style={styles.logpage}>
            <View  elevation={5} style={styles.top}>
                <View style={styles.head}>
                    <Image source={pic} style={{width: 240, height: 85}} />
                </View>
            </View>
            <View style={styles.bgImageWrapper}>
                <Image source={bg} style={styles.backgroundImage} />
            </View>

            <View style={styles.logcontent}>
                <Text>Sign in page - you are disconnected </Text>
                <Button
                    text="tap here to connect"
                    onPress={props.SignInPress}
                />
            </View>
        </View>
    );
};

SignIn.propTypes = {
    SignInPress: React.PropTypes.func,
}


export default SignIn;