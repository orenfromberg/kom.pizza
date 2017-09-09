import { FETCH_TOKEN } from '../Actions/index';

export default (state = null, action) => {
    switch(action.type) {
        case FETCH_TOKEN:
            return action.payload.data.access_token;
        default:
            return state;
    }
}