
import { ADD_REVIEW } from "./constants";

export const addReview = (text, username, tasks) => ({
    type : ADD_REVIEW,
    payload : {
        text,
        username,
        tasks
    }
});