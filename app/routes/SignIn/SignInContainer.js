import React from 'react';
import SignIn from './SignIn';
import Routes from '../../config/routes';

const SignInContainer = (props) => {
    return (
        <SignIn
            onDetailsPress={() => props.navigator.push(Routes.getHomeRoute())}
        />
    );
};

SignInContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default SignInContainer;