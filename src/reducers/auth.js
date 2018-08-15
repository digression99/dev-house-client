import { SET_USER, UNSET_USER, RECEIVE_USER_INFO } from "../actions/constants";

export default (state = { username : '', partnerName : ''}, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                username : action.payload
            };
        case UNSET_USER:
            return {
                username : '',
                partnerName : ''
            };
        case RECEIVE_USER_INFO:
            return {
                ...state,
                partnerName : action.payload.username
            };
        default :
            return state;
    }
}