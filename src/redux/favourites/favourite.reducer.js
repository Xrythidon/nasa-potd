import {FavouriteActionTypes} from "./favourite.types";

const INITIAL_STATE = {
  favourites: JSON.parse(localStorage.getItem("items")),
  isDeleteOn: false
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
    case FavouriteActionTypes.SET_DELETE:
      return {
        ...state,
        isDeleteOn: payload.toggle
      }
    case FavouriteActionTypes.DELETE_ITEM:
      return {
        ...state,
       favourites: state.favourites.filter((item) => 
       item.date !== payload.item)
      }
    case FavouriteActionTypes.DELETE_ITEMS:  
      return {
      }


    default:
      return state;
  }
};

export default favouriteReducer;
