import axios from "axios";
import { environt } from "./url.production";
import { toast } from "react-hot-toast";

const controller = new AbortController();

const instance = axios.create({
  baseURL: environt.url,
  signal: controller.signal,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    toast.error(error.response.data.data);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data.data);
  }
);

export { instance, controller };
