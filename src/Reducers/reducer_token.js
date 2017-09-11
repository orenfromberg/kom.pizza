import { FETCH_TOKEN, DEAUTHORIZE } from '../Actions/index';
import { REHYDRATE } from 'redux-persist/constants';

export default (state = null, action) => {
    switch(action.type) {
        case REHYDRATE:
            return action.payload.token ? action.payload.token : state;
        case FETCH_TOKEN:
            return action.payload.data.access_token;
        case DEAUTHORIZE:
            return (action.payload.data.access_token === state) ? null : state;
        default:
            return state;
    }
}