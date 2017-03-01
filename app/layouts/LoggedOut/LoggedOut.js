import React from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';
import { Text, View, Image } from 'react-native';

const LoggedOut = () => {
    return (
        <ExNavigator
            initialRoute={Routes.getRouletteRoom()}
            style={{ flex: 1 }}
            showNavigationBar={false}
        />
    );
};
export default LoggedOut;