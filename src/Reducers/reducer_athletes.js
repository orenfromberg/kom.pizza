import { FETCH_ATHLETE, CACHE_CLUB_MEMBERS } from '../Actions';
import { handleMissingProfileLarge, handleMissingProfileMedium } from './profile';

export default (state = [], action) => {
    switch(action.type) {
        case CACHE_CLUB_MEMBERS:
        {
            const { members } = action.payload;
            let athletes = Object.assign({}, state);
            members.forEach((member) => {
                if (athletes[member.id] === undefined) {
                    member.profile = handleMissingProfileLarge(member.profile);
                    member.profile_medium = handleMissingProfileMedium(member.profile_medium);
                    athletes[member.id] = member;
                }
            });
            return athletes;    
        }
        case FETCH_ATHLETE:
        {
            let athletes = Object.assign({}, state);
            let athlete = action.payload.data;
            athlete.profile = handleMissingProfileLarge(athlete.profile);
            athlete.profile_medium = handleMissingProfileMedium(athlete.profile_medium);
            athletes[action.payload.data.id] = athlete;
            return athletes;
        }
        default:
            return state;
    }
}