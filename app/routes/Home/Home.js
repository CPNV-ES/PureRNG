import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import Navbar from '../../components/NavBar';
import styles from './styles';
import images from '../../config/images';

const Home = (props) => {
    const bg = images.homeBg;
    // const {onDetailsPress} = props;
    return (

        <View style={styles.logpage}>

            <View style={styles.bgImageWrapper}>
                <Image source={bg} style={styles.backgroundImage} />

            </View>

            <Navbar/>

            <View style={styles.logcontent}>
                <Text>This is the homepage and you are connected </Text>

                <Button
                    text="disconnect"
                    onPress={props.disconnectOnPress}
                />

                <Button
                    text="Tap here to access the rooms"
                    onPress={console.warn('in development')}
                />
            </View>
        </View>
    );
};
Home.propTypes = {
    disconnectOnPress: React.PropTypes.func,
}


export default Home;