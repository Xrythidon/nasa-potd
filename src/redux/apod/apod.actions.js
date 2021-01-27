import Client from "../../API/Client";

import { ApodActionTypes } from "./apod.types";

//

export const setCurrentDate = (selectedDate) => ({
  type: ApodActionTypes.SET_CURRENT_DATE,
  payload: { selectedDate },
});

export const nextDateDay = () => ({
  type: ApodActionTypes.NEXT_DATE_DAY,
});
export const prevDateDay = () => ({
  type: ApodActionTypes.PREV_DATE_DAY,
});

export const fetchImageBegin = () => ({
  type: ApodActionTypes.FETCH_IMAGE_BEGIN,
});

export const fetchImageSuccess = (apod) => ({
  type: ApodActionTypes.FETCH_IMAGE_SUCCESS,
  payload: { apod },
});

export const fetchImageFailure = (error) => ({
  type: ApodActionTypes.FETCH_IMAGE_FAILURE,
  payload: { error },
});

export const fetchImage = (date) => (dispatch, getState) => {
  //Dispatch begin function
  dispatch(fetchImageBegin());

  Client.getApod(date)
    .then((response) => {
      const apod = response.data;
      dispatch(fetchImageSuccess(apod));
    })
    .catch((error) => {
      console.log("catch error")
      dispatch(fetchImageFailure(error.message));
    });
};
