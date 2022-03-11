import { AxiosRequestConfig } from "axios";

import { apiFunc } from "Api";

export const getAll = (config?: AxiosRequestConfig<any>) => {
  return apiFunc(`/class/category`, "GET", config);
}