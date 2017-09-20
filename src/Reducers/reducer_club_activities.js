import { CACHE_CLUB_ACTIVITIES } from '../Actions/index';

export default (state = {}, action) => {
    switch(action.type) {
        case CACHE_CLUB_ACTIVITIES:
            const { clubId, activities } = action.payload;
            let prevActivities = state[clubId] || [];
            let newState = Object.assign({}, state);
            newState[clubId] = [...prevActivities, ...activities];
            return newState;
        default:
            return state;
    }
}