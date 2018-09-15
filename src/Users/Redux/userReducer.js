import { LOGIN_SUCCESS,LOGIN_FAILURE } from "./userActions";

export default (state = {}, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return { ...state, userInfo: action.data };
        case LOGIN_FAILURE:
            return { ...state, error: action.error };
            default:
            return state;    
    }
}
