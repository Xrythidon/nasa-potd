import {
  ApodActionTypes
} from "./apod.types";

import moment from "moment";

const INITIAL_STATE = {
  apod: {},
  selectedDate: moment(),
  loading: false,
  loaded: false,
  error: null,
};



const apodReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

  switch (type) {

    case ApodActionTypes.FETCH_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        loaded: false
      };

    case ApodActionTypes.FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        apod: payload.apod,
        loaded: true,
      };

    case ApodActionTypes.FETCH_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        apod: {},
        loaded: false,
      };

      case ApodActionTypes.SET_CURRENT_DATE:
        return {
          ...state,
          selectedDate: payload.selectedDate
        }
      case ApodActionTypes.NEXT_DATE_DAY:
        return {
          ...state,
          selectedDate: state.selectedDate.add(1, "days")
        }
      case ApodActionTypes.PREV_DATE_DAY:
        return {
          ...state,
          selectedDate: state.selectedDate.subtract(1, "days")
        }


    default:
      return state;
  }
};

export default apodReducer;
