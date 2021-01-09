import { combineReducers } from "redux";
import apodReducer from "./apod/apod.reducer";

export default combineReducers({
    apod: apodReducer
})