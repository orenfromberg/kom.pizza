import { FETCH_CLUB } from '../Actions/index';

export default (state = null, action) => {
    switch(action.type) {
        case FETCH_CLUB:
            return action.payload.data;
        default:
            return state;
    }
}