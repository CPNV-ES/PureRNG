import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
// import AwesomeButton from 'react-native-awesome-button';

const Button = (props) => {
    const { text, onPress } = props;
    return (
    <TouchableOpacity style={styles.buttonww} onPress={onPress} backgroundStyle="{styles.backgroundbutton}">
        <Text style={styles.loginButtonLabel}>
            {text}
        </Text>
    </TouchableOpacity>
        // <AwesomeButton
        //     style={styles.buttonww}
        //     backgroundStyle={styles.backgroundbutton}
        //     labelStyle={styles.loginButtonLabel}
        //     {/*states={{*/}
        //         {/*default: {*/}
        //             {/*text: {text},*/}
        //             {/*onPress: {onPress},*/}
        //             {/*backgroundColor: {bgcolor},*/}
        //             {/*color:{txtcolor}*/}
        //         {/*}}}*/}
        // />
    );
};

Button.propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
};

Button.defaultProps = {
    text: 'Button Text',
    // eslint-disable-next-line no-console
    onPress: () => console.log('Button Pressed'),
};


export default Button;