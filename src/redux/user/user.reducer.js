import moment from "moment"

const INITIAL_STATE = {
    dateSelected: moment().format("YYYY-MM-DD"),
    favPics: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SELECT_DATE":
            return {
                ...state,
                dateSelected: action.payload
            }

        default:
            return state;
    }
}

export default userReducer