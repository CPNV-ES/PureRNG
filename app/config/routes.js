import React from 'react';
import Home from '../routes/Home';
import SignIn from '../routes/SignIn';
import RouletteView from '../routes/RouletteView';


export const routes = {
    getRouletteRoom() {
        return {
            renderScene(navigator) {
                return <RouletteView navigator={navigator}/>
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