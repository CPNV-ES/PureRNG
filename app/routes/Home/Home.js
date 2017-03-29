import React, { Component } from 'react';
import { Text, View, Image, ListView } from 'react-native';
import Button from '../../components/Button';
import Navbar from '../../components/NavBar';
import styles from './styles';
import images from '../../config/images';


/**
 *
 *  Main view of the application
 *  Displays each rooms of each game that you can join
 * @param props
 * @returns {XML}
 * @constructor
 */
const Home = (props) => {


    const bg = images.homeBg;
    const {goRouletteOnPress} = props;
    return (
        <View style={styles.MainView}>
            <View style={styles.bgImageWrapper}>
                <Image source={bg} style={styles.backgroundImage} />
            </View>
            <Navbar/>

            <Text style={{marginTop:15,textAlign:'center',justifyContent: 'center',alignItems: 'center'}}>ROULETTE : </Text>
            <View style={styles.roomsDisplay}>

                {props.rouletteRooms.map((room, key) => {
                    return (
                        <View key={key}>
                            <Text>Room number {room.number}, with {room.users.length} player(s) </Text>
                            <Button text="Join this room" onPress={() => goRouletteOnPress(room._id)}/>
                        </View>
                    );
                })}
            </View>

            <Text style={{marginTop:15,textAlign:'center',justifyContent: 'center',alignItems: 'center'}}>Jackpot : </Text>
            <View style={styles.roomsDisplay}>
                <Text>no room to display</Text>
            </View>
            <Text style={{marginTop:15,textAlign:'center',justifyContent: 'center',alignItems: 'center'}}>Blackjack : </Text>
            <View style={styles.roomsDisplay}>
                <Text>no room to display</Text>
            </View>

            <View style={styles.MainViewContent}>
                <Text>This is the homepage and you are connected </Text>
                <Button
                    text="disconnect"
                    onPress={props.disconnectOnPress}
                />
            </View>
            <View style={styles.MainViewContent}>
                <Button
                    text="test button to go to a roulette room"
                    onPress={props.goRouletteOnPress}
                />
            </View>
        </View>
    );
};

Home.propTypes = {
    disconnectOnPress: React.PropTypes.func,
    goRouletteOnPress: React.PropTypes.func,
    rouletteRooms: React.PropTypes.array,
    blackjackRooms: React.PropTypes.array,
    jackpotRooms: React.PropTypes.array,
};

export default Home;