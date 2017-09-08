import { FETCH_TOKEN } from '../Actions/index';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_TOKEN:
            return action.payload.data.athlete;
        default:
            return state;
    }
}