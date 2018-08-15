import React, { Component } from 'react';

import Login from '../Login';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.googleLogin = this.googleLogin.bind(this);
    }

    googleLogin() {
        console.log('login with google!');
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.googleLogin}>Login With Google</button>*/}
                <Login />
            </div>
        );
    }
}

export default LoginPage;

