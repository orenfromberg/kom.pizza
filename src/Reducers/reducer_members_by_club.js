import { CACHE_CLUB_MEMBERS } from '../Actions';

export default (state = {}, action) => {
    switch(action.type) {
        case CACHE_CLUB_MEMBERS:
            const { clubId, members } = action.payload;
            let newState = Object.assign({}, state);
            
            newState[clubId] = newState[clubId] || [];
            
            members.forEach((member) => {
                if (!newState[clubId].includes(member.id)) {
                    newState[clubId].push(member.id);
                }
            });
            return newState;
        default:
            return state;
    }
}