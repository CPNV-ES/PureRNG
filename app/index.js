// Entry point of the application
// Index.ios.js and index.android.js will require this file
import React from 'react';
import LoggedOut from './layouts/LoggedOut';
const PureRNGapp = (props) => {
    const { status, user, loggingIn } = props;

    // Add test connection
    {/*if (status.connected === false || loggingIn) {*/}
    //     return <Loading />;
    // } else if (user !== null) {
    //     return <LoggedIn />;
    // }
    return <LoggedOut />;
};


// CONNECT ....

PureRNGapp.propTypes = {
    status: React.PropTypes.object,
    user: React.PropTypes.object,
    loggingIn: React.PropTypes.bool,
};

export default PureRNGapp;