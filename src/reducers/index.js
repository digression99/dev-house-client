import { combineReducers } from 'redux';

import tasks from './tasks';
import reviews from './reviews';
import auth from './auth';

export default combineReducers({tasks, reviews, auth});
