import { CHANGE_BAZ } from './actions';

export default function app(state = {}, action) {
    switch(action.type) {
        case CHANGE_BAZ:
            return {
                ...state,
                baz: action.payload,
            };
        default:
            return state;
    }
}