import actionTypes from "../actionTypes";
import { IClassPayloadState, IClassAction } from "StoreTypes/class";
import { ClassListModel, FilterGetAllClass } from "Types/class";
import * as classService from "Services/class";
import { filterClassList } from "Utils/filter"

export const getClassList = (filterBy: FilterGetAllClass, useRefresh: boolean = false) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const req = await classService.getAll(filterBy);
      const { data = [] } = req.data;

      const classList = filterClassList(data, filterBy);

      dispatch(setClassList(classList));
      dispatch(setLoading(false));

      console.log(req.data.data.length, "Length");
    } catch(e) {
      dispatch(setLoading(false));
      dispatch(setClassList([]));
      console.log(e);
    }
  }
}

export const getClassById = (id: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const req = await classService.getById(id);

      dispatch(setState({ detailClass: req.data?.data || {}, loading: false }));
    } catch(e) {
      console.log(e);
      dispatch(setState({ detailClass: {}, loading: false }));
    }
  }
}

export const setClassList = (classList: ClassListModel[]): IClassAction => ({
  type: actionTypes.class.SET_ALL,
  payload: {
    classList
  }
});

export const setFilter = (filterBy: FilterGetAllClass): IClassAction => ({
  type: actionTypes.class.SET_FILTER,
  payload: {
    filterBy
  }
});

export const setEmpyFilter = (): IClassAction => ({
  type: actionTypes.class.SET_EMPTY_FILTER,
  payload: {
    filterBy: {}
  }
});

export const setState = (state: IClassPayloadState): IClassAction => ({
  type: actionTypes.class.SET_STATE,
  payload: {
    state
  }
});

export const setLoading = (loading: boolean): IClassAction => ({
  type: actionTypes.class.SET_LOADING,
  payload: {
    loading
  }
});