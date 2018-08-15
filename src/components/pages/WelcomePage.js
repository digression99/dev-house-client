import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import URL from 'url-parse';

import * as actions from '../../actions';

class WelcomePage extends Component {

    async componentDidMount() {
        console.log('welcome page!');
        console.log(this.props.history);
        console.log(this.props.location);
        console.log('pathname : ', this.props.location.pathname);
        // const url = new URL(this.props.location);
        const searchParams = new URLSearchParams(this.props.location.search);
        if (searchParams.has('access_token')) {
            console.log('access token exist.');
            console.log(searchParams.get('access_token'));
            const accessToken = searchParams.get('access_token');
            await this.props.saveAccessToken(accessToken);
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                WelcomePage!
                Welcome Welcome!!!!!!!!!!!!
            </div>
        );
    }
}

export default compose(
    connect(null, actions)
)(withRouter(WelcomePage));
