import { ToastActionTypes } from "./toasts.types";

//

export const setToast = (type, msg) => ({
  type: ToastActionTypes.SET_TOAST,
  payload: { type, msg },
});


export const deleteToast = () => ({
  type: ToastActionTypes.DELETE_TOAST
})

export const setToastOpen = (setOpen) => ({
  type: ToastActionTypes.SET_OPEN,
  payload: {setOpen}
})