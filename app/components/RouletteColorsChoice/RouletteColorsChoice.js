import React, { Component} from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'


/**
 * Display of the radio buttons to chose on which color to bet
 */

class RouletteColorsChoice extends Component {

    constructor (props) {
        super(props);
        this.state = {
            options : [
                "Red",
                "Green",
                "Black"
            ],
        };

    }

    // Bindings onchange
    setSelectedOption(selectedOption) {
        this.props.onChange(selectedOption);
    }




    /**
     * Render options for each button
     * 3 possibilities in total
     * @param option
     * @param selected
     * @param onSelect
     * @param index
     * @returns {XML}
     */
    renderOption(option, selected, onSelect, index) {
        const style = selected ? {fontWeight: '900', color:'#424242'} : {color:'white', };
        if (index == 0) {
            return (

                <TouchableWithoutFeedback onPress={onSelect} key={index}>
                    <View style={styles.redContainer}>
                        <Text style={style}>{option}</Text>
                    </View>
                </TouchableWithoutFeedback>

            );
        } else if (index == 1) {
            return (

                <TouchableWithoutFeedback onPress={onSelect} key={index}>
                    <View style={styles.greenContainer}>
                        <Text style={style}>{option}</Text>
                    </View>
                </TouchableWithoutFeedback>

            );
        } else if (index == 2) {
            return (

                <TouchableWithoutFeedback onPress={onSelect} key={index}>
                    <View style={styles.blackContainer}>
                        <Text style={style}>{option}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        }

    }


    /**
     * Container of the 3 colors button choices
     * @param optionNodes
     * @returns {XML}
     */
    renderContainer(optionNodes){
        return <View style={styles.ColorsContainer}>{optionNodes}</View>;
    }

    render() {

        return (
            <View style={styles.ColorsContainer}>
                <RadioButtons
                    options={ this.state.options }
                    onSelection={ this.setSelectedOption.bind(this) }
                    selectedOption={this.props.value }
                    renderOption={ this.renderOption }
                    renderContainer={ this.renderContainer }
                />
            </View>
        );
    }
};

export default RouletteColorsChoice;