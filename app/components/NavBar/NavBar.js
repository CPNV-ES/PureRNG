import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import Button from '../Button';
import Routes from '../../config/routes';

let pic = images.logo;

/**
 * Navbar displayed in home view
 * @param props
 * @returns {XML}
 * @constructor
 */

const Navbar = (props) => {

    return (
        <View  elevation={25} style={styles.top}>
            <View style={styles.head}>
                <Image source={pic} style={{width: 100, height: 35}} />
                <View style={{left:350,flexDirection:'row',alignItems: 'center',}}>
                    <Button

                        text="Profile "
                        onPress={props.disconnectOnPress}
                    />
                    <Button
                        text=" logout"
                        onPress={props.getLogout}
                    />
                    <Button text="oui"
                            onPress={() => {
                            // Get a route object from the router
                            let route = Routes.getSignIn(navigator);
                            this.props.navigator.push(route);
                    }}>
                    </Button>
                </View>
            </View>
        </View>
    );
};

Navbar.propTypes = {
    disconnectOnPress: React.PropTypes.func,
}
export default Navbar;