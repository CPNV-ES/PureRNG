import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Roulette = (props) => {

        this.state = {
            rouletteNumbers:[],
        };
    // rouletteNumbers:[1,14,2,13,3,12,4,0,11,5,10,6,9,7,8,1,14,2,13,3,12,4,0,11,5,10,6,9,7,8]
        const arrayMax = 30;
        const limit = 14;
        for (var i = 0; i < arrayMax; i++) {
            this.state.rouletteNumbers.push(Math.round(Math.random() * limit))
        }

        return (

            <View style={styles.rouletteContainer}>
                    {/*Foreach to loop on the roulette numbers (times 2 to add some spinning movement) */}
                    {
                        this.state.rouletteNumbers.map((number, key) => {
                            if ( number == 0) {
                            return (<View style={styles.greenBox} key={key}>
                                <Text style={styles.Number}>{number}</Text>
                            </View>);
                            } else if (number % 2 == 0) {
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
Roulette.propTypes = {

};


export default Roulette;