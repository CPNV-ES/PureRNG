import React, { Component} from 'react';
import rouletteEvents from '../../utils/RouletteViewEvents';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'

class RouletteColorsChoice extends Component {

    constructor (props) {
        super(props);

        // Set the animation container
        this.state = {
            options : [
                "Red",
                "Green",
                "Black"
            ],
        };

    }

    setSelectedOption(selectedOption) {
        this.props.onChange(selectedOption);
    }

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