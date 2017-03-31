import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * Custom Button that contains text & Onpress method
 * @param props
 * @returns {XML}
 * @constructor
 */

const Button = (props) => {
    const { text, onPress, disabled } = props;


    return (
        <TouchableOpacity style={styles.buttonww} disabled={disabled} onPress={onPress}>
            <Text style={styles.loginButtonLabel}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
    disabled: React.PropTypes.bool,
};

Button.defaultProps = {
    text: 'Button Text',
    onPress: () => console.warn('Button Pressed'),
    disabled: false,
};


export default Button;