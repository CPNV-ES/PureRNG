import React from 'react';
import { Text, View , Image} from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import styles from './styles';
import Roulette from '../../components/Roulette';

const RouletteView = (props) => {

    return (

        <View style={styles.MainView}>
            <View style={styles.roulettePlaceholder}>
                <Roulette />
                <View style={styles.triangle} />
                <View style={styles.triangleO} />
            </View>

            <View>
                <Text>Balance : oui oui oui coin</Text>
            </View>
            <Button
                style={styles.white}
                text="go back to home"
                onPress={props.backHome}
            />
            <Button
                style={styles.white}
                text="spin dis"
                onPress={props.spinOnPress}
                color="#841584"
            />
        </View>
    );
};

RouletteView.propTypes = {
    backHome: React.PropTypes.func,
    spinOnPress: React.PropTypes.func,
}


export default RouletteView;