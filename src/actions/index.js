import axios from 'axios';

import {ADD_REVIEW,
    RECEIVE_TASKS,
    SET_USER,
    UNSET_USER,
    RECEIVE_REVIEWS,
    RECEIVE_USER_INFO,
    FAIL_USER_INFO,
    SUCCEED_SAVE_REVIEW,
    RECEIVE_ACCESS_TOKEN
} from "./constants";
import * as api from '../api';
import {getTasksByUsername} from "../selectors";

export const setUser = (username) => ({ type : SET_USER, payload : username });
export const unsetUser = () => ({ type : UNSET_USER });

const receiveTasks = (tasks) => ({ type : RECEIVE_TASKS, payload : { tasks } });
const receiveReviews = (reviews) => ({ type : RECEIVE_REVIEWS, payload : reviews });

const receiveUserInfo = (username, tasks) => ({ type : RECEIVE_USER_INFO, payload : { username, tasks } });
const failUserInfo = () => ({ type : FAIL_USER_INFO });

export const succeedSaveReview = (data) => ({ type : SUCCEED_SAVE_REVIEW, payload : data });

export const fetchTasks = (accessToken) => dispatch => api.fetchTasks(accessToken).then(data => dispatch(receiveTasks(data)));
export const fetchReviews = (username) => dispatch => api.fetchReviews(username).then(data => dispatch(receiveReviews(data)));

// export const fetchUserInfo = (username) => dispatch => api.fetchUserInfo(username).then(data => {
//     if (data.success) {
//         dispatch(receiveUserInfo(username, data.tasks));
//     } else {
//         dispatch(failUserInfo());
//         throw new Error();
//     }
// });

export const fetchUserInfo = (username) => {
    // const tasks = getTasksByUsername(username);
    // return {
    //     type :
    // }
    //
};

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

export const receiveAccessToken = (accessToken) => ({ type : RECEIVE_ACCESS_TOKEN, payload : { accessToken }});

export const saveAccessToken = (accessToken) => async dispatch => {
    await localStorage.setItem('access_token', accessToken);
    dispatch(receiveAccessToken(accessToken));
};