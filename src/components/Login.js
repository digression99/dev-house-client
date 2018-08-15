import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { getUsername} from "../selectors";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username : ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onInputChange(event) {
        this.setState({username : event.target.value});
    }

    async onLogin(event) {
        this.props.setUser(this.state.username);
        await this.props.fetchTasks(this.state.username);
    }

    onLogout(event) {
        this.props.unsetUser();
    }

    render() {
        return (
            <div className="center-align">
                <div className="col s6">
                    {!this.props.username ?
                        <div>
                            <input value={this.state.username} onChange={this.onInputChange} type="text" name="username" />
                            <button onClick={this.onLogin}>Login</button>
                        </div>
                        : <button onClick={this.onLogout}>Logout</button>
                    }
                </div>
                <div>{ this.props.username ?
                    <div>Logged in user : {this.props.username}</div> :
                    <div>Please Login.</div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username : getUsername(state)
});

export default connect(mapStateToProps, actions)(Login);