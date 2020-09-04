import {
  FETCH_IMAGE_BEGIN,
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_SUCCESS,
} from "./apod.actions";

const INITIAL_STATE = {
  apod: {},

  loading: false,
  error: null,
};



const apodReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

  switch (type) {

    case FETCH_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        apod: payload.apod
      };

    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        apod: {}
      };

    default:
      return state;
  }
};

export default apodReducer;
