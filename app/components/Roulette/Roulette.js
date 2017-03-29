import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


/**
 * This component contains the actual roulette
 * Each number represents a 40x40 px square
 * @param props
 * @returns {XML}
 * @constructor
 */

const Roulette = (props) => {
    this.state = {
        rouletteNumbers:[],
        arrayMax:15,
    };


    /**
     *  Generate an array of 30 random numbers between 0 and 14
     *  The defined order is customly made in order to put the "0" in the center of the screen
     *  There is 15 series of numbers (this is made for animation purpose)
     *
     */
    for (var i = 0; i < this.state.arrayMax; i++) {
        this.state.rouletteNumbers.push(9,7,8,1,14,2,13,3,12,4,0,11,5,10,6)
    }
    return (

        <View style={styles.full_display}>
            {/*Foreach to loop on the roulette numbers  */}
            {
                this.state.rouletteNumbers.map((number, key) => {
                    if ( number == 0) {
                        return (<View style={styles.greenBox} key={key}>
                            <Text style={styles.Number}>{number}</Text>
                        </View>);
                    } else if (number <= 7) {
                        return (<View style={styles.redBox} key={key}>
                            <Text style={styles.Number}>{number}</Text>
                        </View>);
                    } else {
                        return (<View style={styles.blackBox} key={key}>
                            <Text style={styles.Number}>{number}</Text>
                        </View>);
                    }
                })
            }
        </View>
    );
};

export default Roulette;
