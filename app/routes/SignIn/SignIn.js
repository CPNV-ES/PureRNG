import React from 'react';
import { Text, View , Image} from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import styles from './styles';
import Navbar from '../../components/NavBar';

const SignIn = (props) => {
    const bg = images.homeBg;
    // const {onDetailsPress} = props;
    return (

        <View style={styles.logpage}>
    <Navbar/>
            <View style={styles.bgImageWrapper}>
                <Image source={bg} style={styles.backgroundImage} />
            </View>

            <View style={styles.logcontent}>
                <Text>Sign in page - you are disconnected </Text>
                <Button
                    text="tap here to connect"
                    onPress={props.onDetailsPress}
                />
            </View>
        </View>
    );
};

SignIn.propTypes = {
    onDetailsPress: React.PropTypes.func,
}


export default SignIn;