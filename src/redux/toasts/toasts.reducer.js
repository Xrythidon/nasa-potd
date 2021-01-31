import { ToastActionTypes } from "./toasts.types";

const INITIAL_STATE = {
  toast: {
    isOpen: false,
    type: "",
    msg: "",
  },
};

const toastReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ToastActionTypes.SET_TOAST:
      return {
        ...state,
        toast: { ...payload, isOpen: true },
      };
    case ToastActionTypes.DELETE_TOAST:
      return {
        ...state,
        toast: {isOpen: false, type: "", msg: ""},
      };
    case ToastActionTypes.SET_OPEN:
      return {
        ...state,
        toast: {...state.toast, isOpen: payload.setOpen},
      };
    default:
      return state;
  }
};

export default toastReducer;

/*type: payload.type, msg: payload.msg */
