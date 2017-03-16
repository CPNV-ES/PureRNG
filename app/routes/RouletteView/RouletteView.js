import React from 'react';
import { Text, View , Image, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import { RadioButtons } from 'react-native-radio-buttons'
import styles from './styles';
import Roulette from '../../components/Roulette';
import RouletteStakesChoice from '../../components/RouletteStakesChoice';

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
            <View style={styles.stakesContainer}>
                <Text>Bet :</Text>
                <RouletteStakesChoice/>
            </View>
            <View styles={styles.ColorsChoices}>

                <View>
                    <Text style={styles.aStyle}>
                        Some text bla bla
                    </Text>
                    <TouchableOpacity style={{position:'absolute'}} onPress={()=>{console.log("It works or not?")}}></TouchableOpacity>
                </View>
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
};


export default RouletteView;