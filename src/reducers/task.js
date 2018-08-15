import { RECEIVE_TASKS } from "../actions/constants";

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return state;
        default:
            return state;
    }
}