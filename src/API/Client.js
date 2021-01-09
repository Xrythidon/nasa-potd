import axios from "axios"

import moment from "moment";

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY


export default {
  getApod(date) {
    if (!date) {
      //assign date = today
      date = moment().format("YYYY-MM-DD")

    } else {
      date = moment(date).format("YYYY-MM-DD")
    }

    return axios.get(`${nasaEndpoint}planetary/apod?api_key=${nasaApiKey}&date=${date}`)
  },
}