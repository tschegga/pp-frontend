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