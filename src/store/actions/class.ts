import actionTypes from "../actionTypes";
import { IClassPayloadState, IClassAction } from "StoreTypes/class";
import { ClassListModel, FilterGetAllClass } from "Types/class";
import * as classService from "Services/class";

export const getClassList = (filterBy?: FilterGetAllClass) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const req = await classService.getAll(filterBy);

      dispatch(setClassList(req.data?.data || []));
      dispatch(setLoading(false));

      console.log(req.data.data.length, "Length");
    } catch(e) {
      dispatch(setLoading(false));
      dispatch(setClassList([]));
      console.log(e);
    }
  }
}

export const setClassList = (classList: ClassListModel[]): IClassAction => ({
  type: actionTypes.class.SET_ALL,
  payload: {
    classList
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