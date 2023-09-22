import apiService from "../apiService";
// const getInitialPublication = await apiService.Publications.getAll();

const initialState: PublicationState = {
    publications: [],
};
console.log(initialState);

const publicationReducer = (
    state: PublicationState = initialState, 
    action: PublicationAction
    ): PublicationState => { 
    //switch
    switch(action.type){
        // default:
        //     state;
    }
    return state
};

export default publicationReducer;