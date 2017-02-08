import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import Button from '../Button';

let pic = images.logo;
const Navbar = (props) => {
    return (
        <View  elevation={5} style={styles.top}>
            <View style={styles.head}>
                <Image source={pic} style={{width: 100, height: 35}} />
                <View style={{left:350,flexDirection:'row',alignItems: 'center',}}>
                <Button

                        text="Profile "
                    onPress={props.getProfile}
                />
                <Button

                        text=" logout"
                    onPress={props.getSignIn}
                />
                </View>
            </View>
        </View>
    );
};

Navbar.propTypes = {
    getProfile: React.PropTypes.func,
    getSignIn: React.PropTypes.func,
}

export default Navbar;