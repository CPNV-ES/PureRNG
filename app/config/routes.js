import React from 'react';
import Home from '../routes/Home';
import SignIn from '../routes/SignIn';
import RouletteView from '../routes/RouletteView';


/**
 *  using the renderScene method along the the navigator props
 Manage the different views of the application
 * @type {{getRouletteRoom: ((roomNumber, userId)), getHomeRoute: (()), getSignIn: (())}}
 */
export const routes = {
    getRouletteRoom(roomNumber, user) {
        return {
            renderScene(navigator) {
                return <RouletteView user={user} roomNumber={roomNumber} navigator={navigator}/>
            },
        };
    },
    getHomeRoute() {
        return {
            showNavigationBar:false,
            renderScene(navigator) {
                return <Home navigator={navigator}/>
            },

        };
    },
    getSignIn() {
        return {
            renderScene(navigator) {
                return <SignIn navigator={navigator}/>
            },
        };
    },

};

export default routes;