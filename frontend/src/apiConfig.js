import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

function setAuthToken(token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export { axiosInstance, setAuthToken };
