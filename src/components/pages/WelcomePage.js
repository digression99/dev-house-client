import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class WelcomePage extends Component {

    componentDidMount() {
        console.log('welcome page!');
        console.log(this.props.history);
        console.log(this.props.location);
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

export default withRouter(WelcomePage);
