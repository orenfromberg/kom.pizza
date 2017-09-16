import { FETCH_CLUB } from '../Actions/index';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_CLUB:
            let clubs = Object.assign({}, state);
            clubs[action.payload.data.id] = action.payload.data;
            return clubs;
        default:
            return state;
    }
}