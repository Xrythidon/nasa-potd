import { FavouriteActionTypes } from "./favourite.types";

//

export const setFavourite = (favourite) => ({
  type: FavouriteActionTypes.SET_FAVOURITE,
  payload: { favourite },
});

export const setFavourites = () => ({
  type: FavouriteActionTypes.SET_FAVOURITES,
});

export const setDelete = (toggle) => ({
  type: FavouriteActionTypes.SET_DELETE,
  payload: { toggle },
});

export const deleteItem = (item) => ({
  type: FavouriteActionTypes.DELETE_ITEM,
  payload: { item },
});

export const deleteAllItems = () => {
  localStorage.clear();
  return {
    type: FavouriteActionTypes.DELETE_ITEMS,
  };
};
