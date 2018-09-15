<<<<<<< HEAD
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
=======
import { LOGIN } from '../actions/index';

export function loginReducer(state = null, action) {
    console.log('loginReducer');
    console.log(action);
    switch (action.type) {
        case LOGIN:
            return action.name;
        default:
            return state;
    }
}
>>>>>>> 8f9e86a117c724d53dceba07c7534028c02970c8
