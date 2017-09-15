import { FETCH_CLUB } from '../Actions/index';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_CLUB:
            let clone = Object.assign({}, state);
            clone[action.payload.data.id] = action.payload.data;
            return clone;
        default:
            return state;
    }
}