import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

const preloadedState = {
    reviews : [
        {
            username: "kim",
            text: "my day sucks",
            tasks : [{
                username: "kim",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            }]
        },
        {
            username: "shim",
            text: "my day blablab",
            tasks : [{
                username: "shim",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            }]
        }
    ],
    tasks : [
        {
        username: "kim",
        taskName: "running",
        comment: "fuck",
        timestamp: 1010
        },
        {
            username: "shim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1020
        },
        {
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1030
        },
        {
            username: "shim",
            taskName: "blabla",
            comment: "fuck",
            timestamp: 1030
        },
        {
            username: "kim",
            taskName: "fucufudkf",
            comment: "fuck",
            timestamp: 1010
        },
        {
            username: "shim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1020
        },
        {
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1030
        },
        {
            username: "shim",
            taskName: "blabla",
            comment: "fuck",
            timestamp: 1030
        }
        ]
};

ReactDOM.render(
    <Provider store={createStore(reducers, preloadedState)}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
