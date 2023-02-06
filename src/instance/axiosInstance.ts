import axios from "axios";
import { environt } from "./url.production";

const controller = new AbortController();

const instance = axios.create({
  baseURL: environt.url,
  signal: controller.signal,
});

// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     config.headers.Authorzation = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log(error);
//     Promise.reject(error);
//   }
// );

export { instance, controller };
