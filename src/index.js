import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import task from './reducers/task';

ReactDOM.render(
    <Provider store={createStore(task)}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
