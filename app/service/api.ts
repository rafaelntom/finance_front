import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

export default axiosApi;
