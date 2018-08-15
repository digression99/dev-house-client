import {SET_USER, UNSET_USER} from "../actions/constants";

export default (state = "kim", action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case UNSET_USER:
            return '';
        default :
            return state;
    }
}