import axios from "axios";
import { environt } from "./url.production";

const controller = new AbortController();

const instance = axios.create({
  baseURL: environt.url,
  signal: controller.signal,
});



export { instance, controller };
