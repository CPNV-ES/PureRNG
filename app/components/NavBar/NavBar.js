import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import images from '../../config/images';

let pic = images.logo;
const Navbar = (props) => {
    return (
        <View  elevation={5} style={styles.top}>
            <View style={styles.head}>
                <Image source={pic} style={{width: 300, height: 105}} />
            </View>
        </View>
    );
};
export default Navbar;