import { loginRequest } from "../user.service";

export const LOGIN_SUCCESS = '[LOGIN] Success';
export const LOGIN_FAILURE = '[LOGIN] Failure';

export const loginPending = async (username, password, dispatch) => {
    try {
        const info = await loginRequest(username, password);
        const { data } = info;
        if(data.status === 'ok')
            dispatch(loginSuccess(data.user));    
    } catch(error) {
        console.log(error);
        const { response: { data } } = error;
        dispatch(loginFailure(data));    
    }
}

export const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    data, 
});


export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    error, 
});