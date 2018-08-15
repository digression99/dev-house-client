
import { ADD_REVIEW, SET_USER, UNSET_USER } from "./constants";
import axios from 'axios';

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

export const fetchTasks = () => dispatch => axios.get