import axios, { AxiosRequestConfig } from "axios";
import { API_URL, API_KEY } from "@env";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "api-key": API_KEY
  }
});

export const apiFunc = (url: string, method: AxiosRequestConfig<any>["method"] = "GET", config?: AxiosRequestConfig<any>) => {
  return api({ url, method, ...config });
}

export default api;
