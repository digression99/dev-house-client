import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Login from './components/Login';

import * as actions from './actions';
import {getUsername, getPartnerName} from "./selectors";
import TaskContainer from './components/TaskContainer';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import WelcomePage from './components/pages/WelcomePage';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';

class App extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <PublicRoute exact path="/" component={WelcomePage} />
                            <PublicRoute exact path="/login" component={LoginPage} />
                            <PrivateRoute exact path="/logout" component={MainPage} />
                            <PrivateRoute exact path="/dashboard" component={MainPage} />
                        </Switch>
                    </div>
                </BrowserRouter>
                <ToastContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username : getUsername(state),
    partnerName : getPartnerName(state)
});

export default connect(mapStateToProps, actions)(App);