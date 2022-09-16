import axios from "axios";
import { useAuthStore } from "../stores/auth";

axios.interceptors.request.use(
  (config) => {
    // Default Bizee Dashboard API URL
    config.baseURL = ""
    // Make browser include cookies and authentication headers in the request
    config.withCredentials = true;
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Code executed on 2xx HTTP status codes
    return response;
  },

  (error) => {
    // Code executed on 4xx, 5xx HTTP status codes
    switch (error.response.status) {
      case 400:
        break;
      case 401: {
        useAuthStore().$reset();
        break;
      }
      case 422: {
        break;
      }
      default:
        console.log(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axios;
