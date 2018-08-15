import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';

import * as actions from './actions';
import {getUsername, getPartnerName} from "./selectors";
import TaskContainer from './components/TaskContainer';

class App extends Component {
    constructor(props) {
        super(props);

        this.notify = this.notify.bind(this);
    }

    async componentDidMount() {
    }

    notify(message) {
        toast(message);
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <Header/>
                </div>
                <div>
                    <button onClick={() => this.notify("kim!")}>Click</button>
                    {this.props.username ? <TaskContainer /> : <Login />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username : getUsername(state),
    partnerName : getPartnerName(state)
});

export default connect(mapStateToProps, actions)(App);