import React from 'react';
import Home from './Home';
import Routes from '../../config/routes';

const HomeContainer = (props) => {
    return (
        <Home
            disconnectOnPress={() => props.navigator.push(Routes.getSignIn())}
            goRouletteRoomOnPress = {() => props.navigator.push(Routes.getRouletteRoom())}
            />
    );
};


HomeContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default HomeContainer;