import React from 'react';
import { Text, View , Image} from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import styles from './styles';
import Roulette from '../../components/Roulette';

const RouletteView = (props) => {
    const bg = images.homeBg;
    let pic = images.logo;
    // const {onDetailsPress} = props;
    return (

        <View style={styles.MainView}>

            <Button
                style={styles.white}
                text="go back to home"
                onPress={props.backHome}
            />
            <View style={styles.MainViewContent}>
                <Text style={styles.white}>Nice roulette oui oui </Text>
            </View>
            <Roulette/>
        </View>
    );
};

RouletteView.propTypes = {
    backHome: React.PropTypes.func,
}


export default RouletteView;