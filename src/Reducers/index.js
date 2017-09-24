import { combineReducers } from 'redux';
import TokenReducer from './reducer_token';
import CurrentAthleteReducer from './reducer_current_athlete';
import AthletesReducer from './reducer_athletes';
import ClubsReducer from './reducer_clubs';
import IsReadyReducer from './reducer_is_ready';
import IsFetchingReducer from './reducer_is_fetching';
import ActivitiesByClubReducer from './reducer_activities_by_club';
import ActivitiesReducer from './reducer_activities';
import MembersByClubReducer from './reducer_members_by_club';

const rootReducer = combineReducers({
    token: TokenReducer,
    currentAthlete: CurrentAthleteReducer,
    athletes: AthletesReducer,
    clubs: ClubsReducer,
    isReady: IsReadyReducer,
    isFetching: IsFetchingReducer,
    activitiesByClub: ActivitiesByClubReducer,
    activities: ActivitiesReducer,
    membersByClub: MembersByClubReducer,
});

export default rootReducer;