import React from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';
import { Text, View, Image } from 'react-native';

/**
 * LoggedOut display
 * @returns {XML}
 * @constructor
 */
const LoggedOut = () => {
    return (
        <ExNavigator
            initialRoute={Routes.getHomeRoute()}
            style={{ flex: 1 }}
            showNavigationBar={false}
        />
    );
};
export default LoggedOut;