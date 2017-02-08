import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import Navbar from '../../components/NavBar';
import styles from './styles';
import images from '../../config/images';
import Accordion from 'react-native-collapsible/Accordion';

const GameChoice = (props) => {
    const bg = images.homeBg;

    // const {onDetailsPress} = props;
    // Actual view of the game choice
    return (

        <View>
            <Navbar/>
            <Button
                text="go hOME"
                onPress={props.goHomeOnPress}
            />
            <View style={styles.ChoiceContent}>
                <AccordionView/>
            </View>
        </View>
    );
};
const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum...',
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...',
    }
];
/* Accordion to display game choice */
class AccordionView extends Component {
    _renderHeader(section) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    }

    render() {
        return (
            <Accordion
                sections={SECTIONS}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        );
    }
}
GameChoice.propTypes = {
    goHomeOnPress: React.PropTypes.func,
}


export default GameChoice;