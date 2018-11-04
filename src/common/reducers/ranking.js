import { REQUEST_RANKING, RECEIVE_RANKING } from '../actions/rankingActions';

export default function rankingReducer(state = { isFetching: false }, action) {
    switch (action.type) {
    case REQUEST_RANKING:
        return Object.assign({}, state, {
            isFetching: true,
        });
    case RECEIVE_RANKING:
        return Object.assign({}, state, {
            isFetching: false,
            rankingArray: action.ranking,
            lastUpdated: action.receivedAt,
        });
    default:
        return state;
    }
}
