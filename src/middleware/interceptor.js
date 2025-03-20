import axios from "axios";
import { baseUrl } from "../Utils/Config/config";

const server = axios.create({
  baseURL: baseUrl,
});

server.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("auth-token");
    request.headers["Authorization"] = token ? `Bearer ${token}` : "";
    return request;
  },
  (error) => Promise.reject(error)
);

server.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Authorization Failed");

      localStorage.removeItem("auth-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default server;
