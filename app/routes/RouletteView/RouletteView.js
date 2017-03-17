import React from 'react';
import { Text, View , Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import images from '../../config/images';
import { RadioButtons } from 'react-native-radio-buttons'
import styles from './styles';
import Roulette from '../../components/Roulette';
import RouletteStakesChoice from '../../components/RouletteStakesChoice';
import RouletteColorsChoice from '../../components/RouletteColorsChoice';
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
            <Text>Bet :</Text>
            <RouletteStakesChoice
                onChange={props.onStakeChange}
                value={props.stakeChoice}
            />
            <View style={{marginTop: 10, marginBottom:45}}>
                <RouletteColorsChoice
                    onChange={props.onColorChange}
                    value={props.colorChoice}
                />

            </View>
            <View>
                <Text>You chose {props.stakeChoice} on {props.colorChoice} </Text>
                <Button
                    style={styles.white}
                    text="BET"
                    onPress={props.bet}
                />
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
        </View>
    );
};

RouletteView.propTypes = {
    backHome: React.PropTypes.func,
    spinOnPress: React.PropTypes.func,
    stakeChoice: React.PropTypes.number,
    colorChoice: React.PropTypes.string,
    onStakeChange: React.PropTypes.func,
    onColorChange: React.PropTypes.func,
    bet: React.PropTypes.func,
};


export default RouletteView;