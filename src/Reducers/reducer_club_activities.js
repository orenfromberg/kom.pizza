import { CACHE_CLUB_ACTIVITIES } from '../Actions';

export default (state = {}, action) => {
    switch(action.type) {
        case CACHE_CLUB_ACTIVITIES:
            const { clubId, activities } = action.payload;
            let newState = Object.assign({}, state);

            newState[clubId] = newState[clubId] || [];

            activities.forEach((activity) => {
                if (!newState[clubId].includes(activity.id))
                    newState[clubId].push(activity.id);
            });
            return newState;
        default:
            return state;
    }
}