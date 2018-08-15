import {ADD_REVIEW, RECEIVE_REVIEWS, SUCCEED_SAVE_REVIEW} from "../actions/constants";

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.payload;
        case ADD_REVIEW:
        case SUCCEED_SAVE_REVIEW:
            return [...state, action.payload];
        default:
            return state;
    }
}