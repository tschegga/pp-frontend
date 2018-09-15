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

export default store;