import axios from "axios";

export const apiUrl =
  process.env.REACT_APP_API_URL ??
  "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343";

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
