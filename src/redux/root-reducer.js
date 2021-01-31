import { combineReducers } from "redux";
import apodReducer from "./apod/apod.reducer";
import favouriteReducer from "./favourites/favourite.reducer";
import toastReducer from "./toasts/toasts.reducer";

export default combineReducers({
    apod: apodReducer,
    fav: favouriteReducer,
    toasts: toastReducer,
})