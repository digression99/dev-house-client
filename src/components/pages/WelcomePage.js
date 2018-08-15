import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import URL from 'url-parse';

import * as actions from '../../actions';

class WelcomePage extends Component {

    constructor(props) {
        super(props);

        this.checkRedirect = this.checkRedirect.bind(this);
    }

    async componentDidMount() {


        console.log('welcome page!');
        console.log(this.props.history);
        console.log(this.props.location);
        console.log('pathname : ', this.props.location.pathname);

        console.log('check redirecting...');
        // const url = new URL(this.props.location);
        const searchParams = new URLSearchParams(this.props.location.search);
        if (searchParams.has('access_token')) {
            const accessToken = searchParams.get('access_token');
            const userName = searchParams.get('user_name');
            const userEmail = searchParams.get('user_email');
            await this.props.saveAccessToken(accessToken);
            await this.props.setUser(userName);
            this.props.history.push('/dashboard');
        }
    }

    async checkRedirect() {

    }

    render() {
        return (
            <div>
                WelcomePage!
                Welcome Welcome!!!!!!!!!!!!
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        );
    }
}

export default compose(
    connect(null, actions)
)(withRouter(WelcomePage));
