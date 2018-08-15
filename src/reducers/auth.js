import {SET_USER, UNSET_USER, RECEIVE_USER_INFO, RECEIVE_ACCESS_TOKEN} from "../actions/constants";

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
        case RECEIVE_ACCESS_TOKEN:
            return {
                ...state,
                accessToken : action.payload.accessToken
            };
        default :
            return state;
    }
}