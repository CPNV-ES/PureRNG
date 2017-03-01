import React, { Component } from 'react';
import SignIn from './SignIn';
import Routes from '../../config/routes';
import AsyncStorage from 'AsyncStorage';

class SignInContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signUpUsername: '',
            signUpPassword: '',
            signInUsername: '',
            signInPassword: '',
            props: props
        };
    }


    render(){

        return (
            <SignIn
                updateState={this.setState.bind(this)}
                SignInPress={() => (
                  fetch('http://10.0.2.2:8887/users/auth', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      username: this.state.signInUsername,
                      password: this.state.signInPassword,
                    }),
                  })
                  .then((response) => response.json())
                  .then((responseJson) => {
                      if (responseJson != null){
                          AsyncStorage.setItem('token', responseJson);
                          this.props.navigator.push(Routes.getHomeRoute())
                      }
                  })
                  .catch(err => {
                    throw err;
                  })
                )}
                SignUpPress = {() => (
                  fetch('http://10.0.2.2:8887/users/signUp', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      username: this.state.signUpUsername,
                      password: this.state.signUpPassword,
                    }),
                  })
                  .then((response) => {
                      if (response.status == 200){
                          console.warn('Votre compte a bien été créé');
                      }
                  })
                  .catch(err => {
                    throw err;
                  })
                )
              }
            />
        );
    }
};

SignInContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default SignInContainer;