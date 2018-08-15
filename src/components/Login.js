import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { toast } from 'react-toastify';
import { getUsername } from "../selectors";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username : "",
            password : ""
        };

        this.onUsernameInputChange = this.onUsernameInputChange.bind(this);
        this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onUsernameInputChange(event) {
        this.setState({username : event.target.value});
    }

    onPasswordInputChange(event) {
        this.setState({password : event.target.value});
    }

    async onLogin() {
        try {
            await this.props.userLogin(this.state.username, this.state.password);
            await this.props.fetchTasks(this.state.username);
            toast('logged in.');
        } catch (e) {
            toast('no user found.');
            this.setState({password : ''});
        }
    }

    onLogout() {
        this.props.unsetUser();
    }

    render() {
        return (
            <div className="center-align">
                <div className="col s6">
                    {!this.props.username ?
                        <div>
                            <input value={this.state.username} onChange={this.onUsernameInputChange} type="text" name="username" />
                            <input value={this.state.password} onChange={this.onPasswordInputChange} type="password" name="password" />
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