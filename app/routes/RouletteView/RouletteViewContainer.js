import React from 'react';
import RouletteView from './RouletteView';
import Routes from '../../config/routes';

const RouletteViewContainer = (props) => {
    return (
        <RouletteView
            backHome={() => props.navigator.push(Routes.getHomeRoute())}
        />
    );
};

RouletteViewContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default RouletteViewContainer;