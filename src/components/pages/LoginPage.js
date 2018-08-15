import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Login from '../Login';


class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.googleLogin = this.googleLogin.bind(this);
    }

    googleLogin() {
        {/*<Redirect to="http://dev-house.herokuapp.com/auth/google"/>;*/}
    }

    render() {
        return (
            <div>
                <a href="http://dev-house.herokuapp.com/auth/google">Login With Google</a>
                {/*<Link to="http://dev-house.herokuapp.com/auth/google">Login With Google</Link>*/}
                {/*<button onClick={this.googleLogin}>Login With Google</button>*/}
                {/*<Login />*/}
            </div>
        );
    }
}

export default withRouter(LoginPage);

