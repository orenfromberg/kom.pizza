import { combineReducers } from 'redux';
import TokenReducer from './reducer_token';
import AthleteReducer from './reducer_athlete';
import ClubReducer from './reducer_club';
import IsReadyReducer from './reducer_is_ready';

const rootReducer = combineReducers({
    token: TokenReducer,
    athlete: AthleteReducer,
    club: ClubReducer,
    isReady: IsReadyReducer
});

export default rootReducer;