import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(thunk, logger))}>
        <App/>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();