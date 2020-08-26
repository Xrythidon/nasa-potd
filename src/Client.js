import axios from "axios"

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY


export default {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod?api_key=${nasaApiKey}`)
  },
}