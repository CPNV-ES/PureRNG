import React from 'react';
import Home from '../routes/Home';
import SignIn from '../routes/SignIn';


export const routes = {
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
    getRouletteRoom() {
        return {
            renderScene(navigator) {
                return <Roulette navigator={navigator}/>
            },
        }
    }

};

export default routes;