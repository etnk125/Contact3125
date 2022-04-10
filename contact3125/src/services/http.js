import axios from "axios";

// work in local
// const URL = "http://localhost:5000";
// for deployment
const URL = "https://contact3125-node.herokuapp.com/";

const httpClient = axios.create({
  baseURL: URL,
});

export default httpClient;
