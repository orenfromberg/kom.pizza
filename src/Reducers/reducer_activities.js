import { CACHE_CLUB_ACTIVITIES } from '../Actions';

export default (state = {}, action) => {
    switch(action.type) {
        case CACHE_CLUB_ACTIVITIES:
            let newState = Object.assign({}, state);
            const { activities } = action.payload;
                activities.forEach((activity) => {
                    if (newState[activity.id] === undefined) {
                        newState[activity.id] = activity;
                    };
                });
                return newState;
        default:
            return state;
    }
}