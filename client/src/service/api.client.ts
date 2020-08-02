import axios from "axios"
import config from "../config/default"

export default axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  }
});