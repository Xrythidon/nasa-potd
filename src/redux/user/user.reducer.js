const INITIAL_STATE = {
    selectedDate: null,
    favPics: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SELECT_DATE":
            return {
                ...state,
                selectedDate: action.payload
            }

        default:
            return state;
    }
}

export default userReducer