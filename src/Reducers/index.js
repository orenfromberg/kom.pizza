import { combineReducers } from 'redux';
import TokenReducer from './reducer_token';
import CurrentAthleteReducer from './reducer_current_athlete';
import AthletesReducer from './reducer_athletes';
import ClubsReducer from './reducer_clubs';
import IsReadyReducer from './reducer_is_ready';

const rootReducer = combineReducers({
    token: TokenReducer,
    currentAthlete: CurrentAthleteReducer,
    athletes: AthletesReducer,
    clubs: ClubsReducer,
    isReady: IsReadyReducer
});

export default rootReducer;