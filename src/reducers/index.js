import { combineReducers } from 'redux';

import tasks from './tasks';
import reviews from './reviews';

export default combineReducers({tasks, reviews});
