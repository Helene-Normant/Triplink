import * as actionsTypes from "./actionTypes"
import apiService from "../apiService"

export const getUserLogin =  () => {
    return async (dispatch: dispatchType) => {
        const loginData = await apiService.Login.post();
        dispatch({ type: actionsTypes.GET_POST_LOGIN, payload: loginData.data});
    };
};
