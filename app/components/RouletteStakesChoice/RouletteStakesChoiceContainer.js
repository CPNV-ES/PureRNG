import React, { Component} from 'react';
import RouletteStakesChoice from './RouletteStakesChoice';
import rouletteEvents from '../../utils/RouletteViewEvents';
import styles from './styles';




class RouletteStakesChoiceContainer extends Component {

    constructor (props) {
        super(props);

        // Set the animation container
        this.state = {
        };

    }
    render() {

        return (
          <RouletteStakesChoice/>
        );

    }
};


RouletteStakesChoiceContainer.propTypes = {

};

export default RouletteStakesChoiceContainer;