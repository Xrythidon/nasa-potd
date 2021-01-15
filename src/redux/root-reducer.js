import { combineReducers } from "redux";
import apodReducer from "./apod/apod.reducer";
import favouriteReducer from "./favourites/favourite.reducer";

export default combineReducers({
    apod: apodReducer,
    fav: favouriteReducer,
})