import React from 'react';
import Home from '../routes/Home';
import SignIn from '../routes/SignIn';


export const routes = {
    getHomeRoute() {
        return {
            renderScene(navigator) {
                return <Home navigator={navigator}/>
            },
            showNavigationBar: false,
        };
    },
    getSignIn() {
        return {
            showNavigationBar:false,
            renderScene(navigator) {

                return <SignIn navigator={navigator}/>

            },


        };
    }

};

export default routes;