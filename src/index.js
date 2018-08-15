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
            username: "kimilsik",
            text: "my day sucks",
            tasks : [{
                username: "bb",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            }]
        }
    ],
    tasks : [{
        username: "bb",
        taskName: "running",
        comment: "fuck",
        timestamp: 1010
    },
        {
            username: "aa",
            taskName: "running",
            comment: "fuck",
            timestamp: 1020
        },
        {
            username: "ss",
            taskName: "running",
            comment: "fuck",
            timestamp: 1030
        }]
};

ReactDOM.render(
    <Provider store={createStore(reducers, preloadedState)}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
