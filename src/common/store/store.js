import { createStore } from 'redux';
import { loginReducer } from '../reducers/login';

const initialState = {
    login: {
        isLoggedIn: false,
        name: '',
    }
}
const store = createStore(loginReducer, initialState);

export default store;