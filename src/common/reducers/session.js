import { REQUEST_SESSIONS, RECEIVE_SESSIONS } from '../actions/sessions';

export default function sessionsReducer(state = { isFetching: false }, action) {
    switch (action.type) {
    case REQUEST_SESSIONS:
        return Object.assign({}, state, {
            isFetching: true,
        });
    case RECEIVE_SESSIONS:
        return Object.assign({}, state, {
            isFetching: false,
            sessionsArray: action.sessions,
            lastUpdated: action.receivedAt,
        });
    default:
        return state;
    }
}
