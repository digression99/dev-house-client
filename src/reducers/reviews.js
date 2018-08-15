import {ADD_REVIEW, RECEIVE_REVIEWS} from "../actions/constants";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_REVIEW:
            return [...state, action.payload];
        case RECEIVE_REVIEWS:
            return action.payload;
        default:
            return state;
    }
}