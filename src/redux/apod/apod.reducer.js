import {
  ApodActionTypes
} from "./apod.types";

import moment from "moment";

const INITIAL_STATE = {
  apod: {},
  selectedDate: null,
  loading: false,
  loaded: false,
  error: null,
  isToday: true,
  isNextDayToday: false,
  isFirstApodDay: false
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
//        selectedDate: moment(payload.apod.date),
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
          selectedDate: moment(payload.selectedDate),
          isNextDayToday: moment(payload.selectedDate).isSame(moment().subtract(1, 'day'), "day"),
          isToday: moment(payload.selectedDate).isSame(moment(), "day"),
          isFirstApodDay: moment(payload.selectedDate).isSame(moment("1995-06-20"), "day")
        }
      case ApodActionTypes.NEXT_DATE_DAY:
        return {
          ...state,
          selectedDate: moment(state.selectedDate.add(1, "days")),
          isNextDayToday: moment(state.selectedDate).isSame(moment().subtract(1, 'day'), "day"),
          isToday: moment(state.selectedDate).isSame(moment(), "day"),
          isFirstApodDay: moment(state.selectedDate).isSame(moment("1995-06-20"), "day")
        }
      case ApodActionTypes.PREV_DATE_DAY:
        return {
          ...state,
          selectedDate: moment(state.selectedDate.subtract(1, "days")),
          isNextDayToday: moment(state.selectedDate).isSame(moment().subtract(1, 'day'), "day"),
          isToday: moment(state.selectedDate).isSame(moment(), "day"),
          isFirstApodDay: moment(state.selectedDate).isSame(moment("1995-06-20"), "day")

        }


    default:
      return state;
  }
};

export default apodReducer;
