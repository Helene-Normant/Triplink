import * as actionsTypes from "./actionTypes"
import apiService from "../apiService"

export function getListPublications() {
    // const action: PublicationAction = {
    //     type: actionsTypes.INIT_PUBLICATIONS,
    //     publication,
    // }
    return async (dispatch: DispatchTypePublications) => {
        const allpublications = await apiService.Publications.getAll();
        dispatch({
            type: actionsTypes.INIT_PUBLICATIONS,
            publications: allpublications
        });
    };
}