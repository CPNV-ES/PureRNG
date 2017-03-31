import React, { Component } from 'react';
import Home from './Home';
import Routes from '../../config/routes';
import AsyncStorage from 'AsyncStorage';
import jwtDecode from 'jwt-decode';
import settings from '../../config/settings';


/**
 *  Logic behind home display
 *  Rooms displayed via server and pushed to current state
 */
class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: {
                roulettes: [],
                jackpots: [],
                blackjacks: []
            },
            roomNumber: null,
        }
    }

    /**
     * Userinfo needed to join a room
     * @returns {*|Promise containing user info based on token}
     */
    getUserinfo() {
        return AsyncStorage.getItem('token', (err, result) => {
            return result;
        });
    }

    /**
     * When the component mounts
     * Get all the rooms from the server and put them in the component's state
     */
    componentDidMount(){
        this.getUserinfo().then((token) => {
            this.setState({
                user: {
                    id:jwtDecode(token)._id,
                    name:jwtDecode(token).username,
                }
            });
        });
        this.getRooms().then((rooms) => {
            rooms.map((room, key) => {
                if ( room.game == 'roulette'){
                    var array = this.state.rooms.roulettes;
                    array.push(room);
                    this.setState({

                        rooms : {
                            roulettes: array
                        }
                    })
                } else if ( room.game == 'jackpot'){
                    this.setState({
                        rooms: {
                            jackpots: room
                        }
                    })
                }
            })
        });
    }


    /**
     * Binding (link between container and view)
     * @param roomNumber
     */
    roomNumber(roomNumber) {
        this.setState({ roomNumber });
    }

    /**
     *
     * @returns {Promise. -> all the rooms from th server}
     */
    getRooms(){
        return fetch(settings.server+'rooms')
            .then((response) => response.json())}

    render() {
        return (
            <Home
                disconnectOnPress={() => this.props.navigator.push(Routes.getSignIn())}
                goRouletteOnPress={(roomNumber) => {
                        this.props.navigator.push(Routes.getRouletteRoom(roomNumber,this.state.user))}
                    }
                rouletteRooms={this.state.rooms.roulettes}
                jackpotRooms={this.state.rooms.jackpots}
                blackJackRooms={this.state.rooms.blackjacks}
                updateState={this.setState.bind(this)}
                getRoomNumber={this.roomNumber.bind(this)}/>
        );
    }
};

HomeContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default HomeContainer;