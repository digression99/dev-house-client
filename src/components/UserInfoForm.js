import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class UserInfoForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            partnerName : ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputSubmit = this.onInputSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({partnerName : event.target.value});
    }

    async onInputSubmit() {
        console.log('fetching...');
        await this.props.fetchUserInfo(this.state.partnerName);
    }

    render() {
        return (
            <div>
                <input value={this.state.partnerName} onChange={this.onInputChange} type="text"/>
                <button onClick={this.onInputSubmit}>Get Partner's Tasks.</button>
            </div>
        );
    }
}

export default connect(null, actions)(UserInfoForm);