import { combineReducers } from 'redux';
import TokenReducer from './reducer_token';
import AthleteReducer from './reducer_athlete';
import ClubsReducer from './reducer_clubs';
import IsReadyReducer from './reducer_is_ready';

const rootReducer = combineReducers({
    token: TokenReducer,
    athlete: AthleteReducer,
    clubs: ClubsReducer,
    isReady: IsReadyReducer
});

export default rootReducer;