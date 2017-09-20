import { SET_IS_FETCHING_ACTIVITIES } from '../Actions/index';

export default (state = false, action) => {
    switch(action.type) {
        case SET_IS_FETCHING_ACTIVITIES:
            return action.payload;
        default:
            return state;
    }
}