import {FavouriteActionTypes} from "./favourite.types";

const INITIAL_STATE = {
  favourites: JSON.parse(localStorage.getItem("items"))
};

const favouriteReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FavouriteActionTypes.SET_FAVOURITE:
      return {
        ...state,
        favourites:( payload.favourite),
      };
    case FavouriteActionTypes.SET_FAVOURITES:
      return {
        ...state,
        favourites: JSON.parse(localStorage.getItem("items"))
      };

    default:
      return state;
  }
};

export default favouriteReducer;
