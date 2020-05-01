import 'isomorphic-fetch';
import { fetchData } from '../../client/backend/backend';

export const REQUEST_SESSIONS = 'REQUEST_SESSIONS';
export const RECEIVE_SESSIONS = 'RECEIVE_SESSIONS';

function requestSessions() {
    return {
        type: REQUEST_SESSIONS,
    };
}

function receiveSessions(json) {
    return {
        type: RECEIVE_SESSIONS,
        sessions: json,
        receivedAt: Date.now(),
    };
}

export function fetchSessions(userId) {
    return function d(dispatch) {
        dispatch(requestSessions());

        return fetchData(`/v1/sessions?userid=${userId}`)
            .then(
                response => response.json(),
                error => console.log(error),
            )
            .then(
                json => dispatch(receiveSessions(json)),
            );
    };
}
