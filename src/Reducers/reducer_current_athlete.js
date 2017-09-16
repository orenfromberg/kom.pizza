import { FETCH_TOKEN } from '../Actions/index';
import { handleMissingProfileLarge, handleMissingProfileMedium } from './profile';

export default (state = null, action) => {
    switch(action.type) {
        case FETCH_TOKEN:
            let athlete = Object.assign({}, action.payload.data.athlete);
            athlete.profile = handleMissingProfileLarge(athlete.profile);
            athlete.profile_medium = handleMissingProfileMedium(athlete.profile_medium);
            return athlete;
        default:
            return state;
    }
}