import {
    LOGIN,
    LOGOUT,
    SIGNUP,
    REQUEST_SIGNUP,
} from '../actions/index';

export default function userReducer(state = { loggedIn: false, isFetching: false }, action) {
    switch (action.type) {
    case LOGIN:
        return action.user;
    case LOGOUT:
        return action.user;
    case SIGNUP:
        return Object.assign({}, state, {
            isFetching: false,
            user: action.user,
        });
    case REQUEST_SIGNUP:
        return Object.assign({}, state, {
            isFetching: true,
        });
    default:
        return state;
    }
}
