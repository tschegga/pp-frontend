import { LOGIN, LOGOUT } from '../actions/index';

export function userReducer(state = { loggedIn: false }, action) {
    switch (action.type) {
        case LOGIN:
            return action.user;
        case LOGOUT:
            return action.user;
        default:
            return state;
    }
}
