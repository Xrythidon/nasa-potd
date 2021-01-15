
import { FavouriteActionTypes } from "./favourite.types";

//

export const setFavourite = (favourite) => ({
  type: FavouriteActionTypes.SET_FAVOURITE,
  payload: { favourite },
});

export const setFavourites = () => ({
  type: FavouriteActionTypes.SET_FAVOURITES
});
