import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

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
        try {
            await this.props.fetchUserInfo(this.state.partnerName);
            toast(`${this.state.partnerName} found!!`);
        } catch (e) {
            toast('no partner found.');
        }
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