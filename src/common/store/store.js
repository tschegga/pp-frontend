<<<<<<< HEAD
import { createStore, combineReducers } from 'redux';
import { userReducer } from '../reducers/login';

const initialState = {
    user: {
        loggedIn: false
    }
};

const store = createStore(
    combineReducers({
        user: userReducer
    }),
    initialState
);
=======
import { createStore } from 'redux';
import { loginReducer } from '../reducers/login';

const initialState = {
    login: {
        isLoggedIn: false,
        name: '',
    }
}
const store = createStore(loginReducer, initialState);
>>>>>>> 8f9e86a117c724d53dceba07c7534028c02970c8

export default store;