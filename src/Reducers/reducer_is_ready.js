import { SET_IS_READY } from '../Actions/index';

export default (state = false, action) => {
    switch(action.type) {
        case SET_IS_READY:
            return action.payload;
        default:
            return state;
    }
}