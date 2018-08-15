import { RECEIVE_TASKS, RECEIVE_USER_INFO } from "../actions/constants";

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
        case RECEIVE_USER_INFO :
            return [...state, ...action.payload.tasks.tasks];
        default:
            return state;
    }
}