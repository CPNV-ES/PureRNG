import React from 'react';
import GameChoice from './GameChoice';
import Routes from '../../config/routes';

const GameChoiceContainer = (props) => {
    return (
        <GameChoice
            goHomeOnPress={() => props.navigator.push(Routes.getHomeRoute())}
        />
    );
};

GameChoiceContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default GameChoiceContainer;