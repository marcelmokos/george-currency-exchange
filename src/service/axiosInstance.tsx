import axios from "axios";

export const apiUrl = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
