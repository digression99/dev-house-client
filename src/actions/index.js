import axios from 'axios';

import {ADD_REVIEW,
    RECEIVE_TASKS,
    SET_USER,
    UNSET_USER,
    RECEIVE_REVIEWS,
    RECEIVE_USER_INFO,
    FAIL_USER_INFO
} from "./constants";
import * as api from '../api';

export const addReview = (text, username, tasks) => ({
    type : ADD_REVIEW,
    payload : {
        text,
        username,
        tasks
    }
});

export const setUser = (username) => ({ type : SET_USER, payload : username });
export const unsetUser = () => ({ type : UNSET_USER });

const receiveTasks = (tasks) => ({ type : RECEIVE_TASKS, payload : { tasks } });
const receiveReviews = (reviews) => ({ type : RECEIVE_REVIEWS, payload : reviews });

const receiveUserInfo = (username, tasks) => ({ type : RECEIVE_USER_INFO, payload : { username, tasks } });
const failUserInfo = () => ({ type : FAIL_USER_INFO });

export const fetchTasks = (username) => dispatch => api.fetchTasks(username).then(data => dispatch(receiveTasks(data)));
export const fetchReviews = (username) => dispatch => api.fetchReviews(username).then(data => dispatch(receiveReviews(data)));

export const fetchUserInfo = (username) => dispatch => api.fetchUserInfo(username).then(data => {
    console.log('fetch user info succeed.');
    if (data.success) {
        dispatch(receiveUserInfo(username, data.tasks));
    } else {
        dispatch(failUserInfo());
    }
});