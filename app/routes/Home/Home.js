import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import Navbar from '../../components/NavBar';
import styles from './styles';
import images from '../../config/images';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

const Home = (props) => {
    const bg = images.homeBg;

    return (
        <View style={styles.MainView}>
            <View style={styles.bgImageWrapper}>
                <Image source={bg} style={styles.backgroundImage} />
            </View>
            <Navbar/>
            <View style={styles.accordion}>
                <AccordionView/>
            </View>
            <View style={styles.MainViewContent}>
                <Text>This is the homepage and you are connected </Text>
                <Button
                    text="disconnect"
                    onPress={props.disconnectOnPress}
                />
            </View>
        </View>
    );
};
/* Accordion part */
let roulettesRooms;

const SECTIONS = [
    {
        title: 'Jackpot',
        content: 'Enter a jackpot room...',
    },
    {
        title: 'Roulettes',
        content: 'ok',
    }
];
/* Accordion to display game choice */
class AccordionView extends Component {
    _renderHeader(section, index, isActive) {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={{ width:250, backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={{ width:250, backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
                <Animatable.Text
                    duration={300}
                    easing="ease-out">
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
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
Home.propTypes = {
    goRouletteRoomOnPress: React.PropTypes.func,
    disconnectOnPress: React.PropTypes.func,
}


export default Home;