import { RECEIVE_TASKS } from "../actions/constants";

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return action.payload;
        default:
            return state;
    }
}