import { FETCH_ATHLETE } from '../Actions/index';

export default (state = null, action) => {
    switch(action.type) {
        case FETCH_ATHLETE:
            return action.payload.data;
        default:
            return state;
    }
}