import axios from "axios";

// work in local
const URL = "http://localhost:5000";

const httpClient = axios.create({
  baseURL: URL,
});

export default httpClient;
