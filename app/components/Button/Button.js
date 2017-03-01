import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
    const { text, onPress } = props;
    return (
    <TouchableOpacity style={styles.buttonww} onPress={onPress}>
        <Text style={styles.loginButtonLabel}>
            {text}
        </Text>
    </TouchableOpacity>
    );
};

Button.propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
};

Button.defaultProps = {
    text: 'Button Text',
    onPress: () => console.warn('Button Pressed'),
};


export default Button;