import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import apodReducer from "./apod/apod.reducer";

export default combineReducers({
    user: userReducer,
    apod: apodReducer
})