import { FETCH_CURRENT_ATHLETE } from '../Actions';
import { handleMissingProfileLarge, handleMissingProfileMedium } from './profile';

export default (state = null, action) => {
    switch(action.type) {
        case FETCH_CURRENT_ATHLETE:
            let athlete = Object.assign({}, action.payload.data);
            athlete.profile = handleMissingProfileLarge(athlete.profile);
            athlete.profile_medium = handleMissingProfileMedium(athlete.profile_medium);
            return athlete;
        default:
            return state;
    }
}