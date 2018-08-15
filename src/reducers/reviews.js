import { ADD_REVIEW } from "../actions/constants";

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            return [...state, action.payload];
        default:
            return state;
    }
}