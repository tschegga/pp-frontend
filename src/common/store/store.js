import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchRanking } from '../actions/rankingActions';
import userReducer from '../reducers/login';
import rankingReducer from '../reducers/ranking';
import sessionsReducer from '../reducers/session';

const initialState = {
    user: {
        loggedIn: false,
    },
    sessions: {
        isFetching: false,
        sessionsArray: [],
    },
};

const store = createStore(
    combineReducers({
        user: userReducer,
        ranking: rankingReducer,
        sessions: sessionsReducer,
    }),
    initialState,
    applyMiddleware(
        thunkMiddleware,
    ),
);

store.dispatch(fetchRanking());

export default store;
