import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.interceptors.request.use(
  function (config) {
    config.params["api_key"] = process.env.NEXT_PUBLIC_API_KEY;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance };
