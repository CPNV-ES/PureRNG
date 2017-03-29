import React from 'react';
import { Text, View , Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import Roulette from '../../components/Roulette';
import RouletteStakesChoice from '../../components/RouletteStakesChoice';
import RouletteColorsChoice from '../../components/RouletteColorsChoice';

/**
 * Display of a roulette room
 * @param props
 * @returns {XML}
 * @constructor
 */
const RouletteView = (props) => {

    return (
        <View style={styles.MainView}>
            <Text style={styles.white}>Latest rolls : </Text>
            <View style={styles.roulettePlaceholder}>
                <Roulette />
                <View style={styles.triangle} />
                <View style={styles.triangleO} />
            </View>

            <View style={styles.titles}>
                <Text style={styles.white}>Balance : {props.currentBalance} coins</Text>
                <Text style={styles.white}>Next roll in X Seconds</Text>
            </View>

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
            <View style={{justifyContent:'center', alignItems: 'center',}}>
                <Text style={styles.white} >Place your bets !</Text>
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
                <Button
                    style={styles.white}
                    text="BET NOW !"
                    onPress={props.betOnPress}
                />
                <Text style={styles.white}>Current bet :</Text>
                {props.betValue !== undefined && props.betColor !== undefined || props.betValue == null && props.betColor == null || props.betColor !== 'None selected' ? (
                    <Text style={styles.white}>{props.betValue} ON {props.betColor}</Text>

                ) : (
                    <Text style={styles.white}>no current bet</Text>
                )}
            </View>
        </View>
    );
};

RouletteView.propTypes = {
    backHome: React.PropTypes.func,
    spinOnPress: React.PropTypes.func,
    stakeChoice: React.PropTypes.number,
    colorChoice: React.PropTypes.string,
    currentBalance: React.PropTypes.number,
    onStakeChange: React.PropTypes.func,
    onColorChange: React.PropTypes.func,
    betOnPress: React.PropTypes.func,
    betValue:React.PropTypes.number,
    betColor:React.PropTypes.string,
};


export default RouletteView;