import axios from "axios";
import { baseUrl } from "../Utils/Config/config";

// const token = localStorage.getItem("token") ; 
const server = axios.create({
    baseURL: baseUrl,
  });

  server.interceptors.request.use(
    (request) => {
      request.headers["Authorization"] = token ? "Bearer " + token : "";
      return request;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        console.log("Authorization Failed");
      }
      return Promise.reject(error);
    }
  );
  
  export default server;
