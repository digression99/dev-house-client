import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class WelcomePage extends Component {

    async componentDidMount() {
        console.log('welcome page!');
        console.log(this.props.history);
        console.log(this.props.location);
        const url = new URL(this.props.location.href);
        const searchParams = new URLSearchParams(url.search);
        if (searchParams.has('access_token')) {
            console.log(searchParams.get('access_token'));
            const accessToken = searchParams.get('access_token');
            await saveAccessToken(accessToken);
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

export default connect(null, actions)(withRouter(WelcomePage));
