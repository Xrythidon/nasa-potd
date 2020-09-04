import Client from "../../Client";



export const FETCH_IMAGE_BEGIN = "FETCH_IMAGE_BEGIN"
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS"
export const FETCH_IMAGE_FAILURE = "FETCH_IMAGE_FAILURE"



//ASYNC ACTION
export const fetchImage = (date) => {
    return dispatch => {
        dispatch(fetchImageBegin())
        Client.getApod(date).then(response => {
            const apod = response.data
            dispatch(fetchImageSuccess(apod))
        })
        .catch(error => {
            dispatch(fetchImageFailure(error.message))
        })
    }
}



export const fetchImageBegin = () => ({
    type: FETCH_IMAGE_BEGIN
})

export const fetchImageSuccess = (apod) => ({
    type: FETCH_IMAGE_SUCCESS,
    payload: { apod }
})

export const fetchImageFailure = (error) => ({
    type: FETCH_IMAGE_FAILURE,
    payload: { error }
})
