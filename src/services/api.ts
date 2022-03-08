import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "@env";

const api = axios.create({
  baseURL: API_URL
});

export const apiFunc = (url: string, method: AxiosRequestConfig<any>["method"] = "GET", config?: AxiosRequestConfig<any>) => {
  return api({ url, method, ...config });
}

export default api;
