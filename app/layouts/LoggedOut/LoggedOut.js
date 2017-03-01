import React from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import Navbar from '../../components/NavBar';

const LoggedOut = () => {
    // Change route to test
    const route = Routes.getSignIn();
    const pic = images.logo;
    return (
        <ExNavigator
            initialRoute={route}
            style={{ flex: 1 }}
            sceneStyle={{ paddingTop: -25 }}
            showNavigationBar={route.showNavigationBar}
        />


    );

};
export default LoggedOut;
