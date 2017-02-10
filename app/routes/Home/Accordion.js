import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

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
class HomeAccordion extends Component {
    _renderHeader(section, index, isActive) {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
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

export default HomeAccordion;