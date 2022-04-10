import axios from "axios";

// work in local
// const URL = "http://localhost:5000";
// deployment
const URL = "https://contact3125.herokuapp.com/";

const httpClient = axios.create({
  baseURL: URL,
});

export default httpClient;
