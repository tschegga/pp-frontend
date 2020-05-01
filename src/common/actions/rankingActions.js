import 'isomorphic-fetch';
import { fetchData } from '../../client/backend/backend';

export const REQUEST_RANKING = 'REQUEST_RANKING';
export const RECEIVE_RANKING = 'RECEIVE_RANKING';

function requestRanking() {
    return {
        type: REQUEST_RANKING,
    };
}

function receiveRanking(json) {
    return {
        type: RECEIVE_RANKING,
        ranking: json,
        receivedAt: Date.now(),
    };
}

export function fetchRanking() {
    return function d(dispatch) {
        dispatch(requestRanking());

        return fetchData('/v1/ranking')
            .then(
                response => response.json(),
                error => console.log(error),
            )
            .then(
                json => dispatch(receiveRanking(json)),
            );
    };
}
