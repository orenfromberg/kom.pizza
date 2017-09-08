import { combineReducers } from 'redux';
import TokenReducer from './reducer_token';
import AthleteReducer from './reducer_athlete';

const rootReducer = combineReducers({
    token: TokenReducer,
    athlete: AthleteReducer,
});

export default rootReducer;