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
        console.log('username : ', event.target.value);
        console.log('username state : ', this.state.username);
        this.setState({username : event.target.value});
    }

    onLogin(event) {
        console.log('button clicked.');
        console.log(event.target);
        this.props.setUser(this.state.username);
    }

    onLogout(event) {
        console.log('logout!');
        this.props.unsetUser();
    }

    render() {
        console.log('in login, props : ', this.props);
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