import { combineReducers } from "redux";
import publicationReducer from "./publication.reducer";
import userReducer from "./user.reducer";

export default combineReducers ({
    //REDUCERS
    userReducer,
    publicationReducer,
});