import { AxiosRequestConfig } from "axios";

import { apiFunc } from "Api";
import { objectToUrlQuery } from "App/utils/format";
import { FilterGetAllClass } from "Types/class";

export const getAll = (filterBy?: FilterGetAllClass, config?: AxiosRequestConfig<any>) => {
  const query = "";
  // const query = Object.keys(filterBy || {}).length > 0 ? "?" + objectToUrlQuery(filterBy) : "";

  return apiFunc(`/class${query}`, "GET", config);
}

export const getById = (id: string, config?: AxiosRequestConfig<any>) => {
  return apiFunc(`/class/${id}`, "GET", config);
}

