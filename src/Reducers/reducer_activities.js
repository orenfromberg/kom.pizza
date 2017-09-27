import { CACHE_CLUB_ACTIVITIES } from '../Actions';
import { handleMissingProfileLarge, handleMissingProfileMedium } from './profile';

export default (state = {}, action) => {
    switch(action.type) {
        case CACHE_CLUB_ACTIVITIES:
            let newState = Object.assign({}, state);
            const { activities } = action.payload;
                activities.forEach((activity) => {
                    let newActivity = Object.assign({}, activity);
                    newActivity.athlete.profile = handleMissingProfileLarge(newActivity.athlete.profile);
                    newActivity.athlete.profile_medium = handleMissingProfileMedium(newActivity.athlete.profile_medium);

                    if (newState[activity.id] === undefined) {
                        newState[activity.id] = activity;
                    };
                });
                return newState;
        default:
            return state;
    }
}