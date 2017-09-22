import { FETCH_ATHLETE } from '../Actions';
import { handleMissingProfileLarge, handleMissingProfileMedium } from './profile';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_ATHLETE:
            let athletes = Object.assign({}, state);
            let athlete = action.payload.data;
            athlete.profile = handleMissingProfileLarge(athlete.profile);
            athlete.profile_medium = handleMissingProfileMedium(athlete.profile_medium);
            athletes[action.payload.data.id] = athlete;
            return athletes;
        default:
            return state;
    }
}