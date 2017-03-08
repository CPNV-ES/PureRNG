import React from 'react';
import RouletteView from './RouletteView';
import Routes from '../../config/routes';
import RouletteContainer from '../../components/Roulette';
import rouletteEvents from '../../utils/RouletteViewEvents';

const RouletteViewContainer = (props) => {
    return (
        <RouletteView
            backHome={() => props.navigator.push(Routes.getHomeRoute())}
            spinOnPress={() => rouletteEvents.spinTrigger()}
        />
    );
};

RouletteViewContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default RouletteViewContainer;