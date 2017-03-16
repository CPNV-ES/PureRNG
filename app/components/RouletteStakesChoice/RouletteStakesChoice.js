import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';

const RouletteStakesChoice = (props) => {
    return (
        <View style={styles.stakesContainer}>
            <View style={styles.stake}>
                <Button
                    style={styles.white}
                    text="10"
                    value="10"
                />
            </View>
            <View style={styles.stake}>
                <Button
                    style={styles.white}
                    text="20"
                    value="20"
                />
            </View>
            <View style={styles.stake}>
                <Button
                    style={styles.white}
                    text="50"
                    value="50"
                />
            </View>
            <View style={styles.stake}>
                <Button
                    style={styles.white}
                    text="100"
                    value="100"
                />
            </View>
            <View style={styles.stake}>
                <Button
                    style={styles.white}
                    text="all"
                    value="all"
                />
            </View>
        </View>
    );
};
export default RouletteStakesChoice;