import axios from "axios";

export const service = axios.create({
  baseURL: "https://api.visionid.vn/api",
  timeout: 10000,
});

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      // handle unauthorized
    }
    return Promise.reject(error);
  }
);
