import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const Roulette = React.createClass({

    render() {
        return (
            <View style={styles.rouletteContainer}>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>1</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>14</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>2</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>13</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>3</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>12</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>4</Text>
                </View>
                <View style={styles.greenBox}>
                    <Text style={styles.Number}>0</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>11</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>5</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>10</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>6</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>9</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>7</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>8</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>1</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>14</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>2</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>13</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>3</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>12</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>4</Text>
                </View>
                <View style={styles.greenBox}>
                    <Text style={styles.Number}>0</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>11</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>5</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>10</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>6</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>9</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.Number}>7</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.Number}>8</Text>
                </View>
            </View>

        );
    },

});

export default Roulette;