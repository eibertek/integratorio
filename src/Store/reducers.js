import { combineReducers } from 'redux';
import cardReducer from '../Card/Redux/cardReducer';

export const NOTYPEDFINED = 'TYPE OF ACTION NTO DEFINED';
export const rootReducer = (state = {}, action) => {
    switch(action.type) {
        case NOTYPEDFINED:
            return state;
        default:
            return state;    
    }
}

export default combineReducers({
    root: rootReducer,
    card: cardReducer
});