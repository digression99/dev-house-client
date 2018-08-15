import axios from 'axios';

import {ADD_REVIEW,
    RECEIVE_TASKS,
    SET_USER,
    UNSET_USER,
    RECEIVE_REVIEWS,
    RECEIVE_USER_INFO,
    FAIL_USER_INFO,
    SUCCEED_SAVE_REVIEW
} from "./constants";
import * as api from '../api';

// export const addReview = (text, username, tasks) => ({
//     type : ADD_REVIEW,
//     payload : {
//         text,
//         username,
//         tasks
//     }
// });

export const setUser = (username) => ({ type : SET_USER, payload : username });
export const unsetUser = () => ({ type : UNSET_USER });

const receiveTasks = (tasks) => ({ type : RECEIVE_TASKS, payload : { tasks } });
const receiveReviews = (reviews) => ({ type : RECEIVE_REVIEWS, payload : reviews });

const receiveUserInfo = (username, tasks) => ({ type : RECEIVE_USER_INFO, payload : { username, tasks } });
const failUserInfo = () => ({ type : FAIL_USER_INFO });

export const succeedSaveReview = (data) => ({ type : SUCCEED_SAVE_REVIEW, payload : data });

export const fetchTasks = (username) => dispatch => api.fetchTasks(username).then(data => dispatch(receiveTasks(data)));
export const fetchReviews = (username) => dispatch => api.fetchReviews(username).then(data => dispatch(receiveReviews(data)));

export const fetchUserInfo = (username) => dispatch => api.fetchUserInfo(username).then(data => {
    if (data.success) {
        dispatch(receiveUserInfo(username, data.tasks));
    } else {
        dispatch(failUserInfo());
        throw new Error();
    }
});

export const userLogin = (username, password) => dispatch => api.userLogin(username, password).then(data => {
    if (data) {
        dispatch(setUser(username));
    } else {
        dispatch(failUserInfo());
        throw new Error();
    }
});

export const saveReview = (username, text, tasks) => dispatch => api.saveReview(username, text, tasks).then(data => {
    dispatch(succeedSaveReview(data));
});