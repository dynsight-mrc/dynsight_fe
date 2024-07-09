import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://38.242.254.49:5000/api", // Replace with your API base URL
});
export default axiosInstance;
