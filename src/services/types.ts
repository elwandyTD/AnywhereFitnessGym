import { apiFunc } from "Api";
import { AxiosRequestConfig } from "axios";

export const getAll = (config: AxiosRequestConfig<any>) => {
  return apiFunc("class/types", "GET", config);
}