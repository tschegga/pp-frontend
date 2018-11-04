import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchRanking } from '../actions/rankingActions';
import userReducer from '../reducers/login';
import rankingReducer from '../reducers/ranking';

const initialState = {
    user: {
        loggedIn: false,
    },
};

const store = createStore(
    combineReducers({
        user: userReducer,
        ranking: rankingReducer,
    }),
    initialState,
    applyMiddleware(
        thunkMiddleware,
    ),
);

store.dispatch(fetchRanking());

export default store;
