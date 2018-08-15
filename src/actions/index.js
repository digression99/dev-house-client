import axios from 'axios';

import {ADD_REVIEW, RECEIVE_TASKS, SET_USER, UNSET_USER, RECEIVE_REVIEWS} from "./constants";
import * as api from '../api';

export const addReview = (text, username, tasks) => ({
    type : ADD_REVIEW,
    payload : {
        text,
        username,
        tasks
    }
});

export const setUser = (username) => ({ type : SET_USER, payload : { username }});
export const unsetUser = () => ({ type : UNSET_USER });

const receiveTasks = (tasks) => ({ type : RECEIVE_TASKS, payload : tasks });
const receiveReviews = (reviews) => ({ type : RECEIVE_REVIEWS, payload : reviews });

export const fetchTasks = () => dispatch => api.fetchTasks().then(data => dispatch(receiveTasks(data)));
export const fetchReviews = () => dispatch => api.fetchReviews().then(data => dispatch(receiveReviews(data)));

