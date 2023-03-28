import axios from "axios";

const BASE_URL = "http://localhost:3000/auth";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
