import { SET_IS_FETCHING } from '../Actions';

export default (state = false, action) => {
    switch(action.type) {
        case SET_IS_FETCHING:
            return action.payload;
        default:
            return state;
    }
}