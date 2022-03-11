import actionTypes from "../actionTypes";
import { IClassPayloadState, IClassAction } from "StoreTypes/class";
import { ClassListModel, FilterGetAllClass } from "Types/class";
import * as classService from "Services/class";

export const setClassList = (classList: ClassListModel[]): IClassAction => ({
  type: actionTypes.class.SET_ALL,
  payload: {
    classList
  }
});

export const getClassList = (filterBy?: FilterGetAllClass) => {
  return async (dispatch: any) => {
    try {
      const req = await classService.getAll(filterBy);

      console.log(req.data.data, "Data");
      console.log(req.data.data.length, "Length");
    } catch(e) {
      console.log(e);
    }
  }
}