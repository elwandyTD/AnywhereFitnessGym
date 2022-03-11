import actionTypes from "../actionTypes";
import { ITypeAction, ITypePayloadState } from "StoreTypes/type";
import { TypeModel } from "Types/type";

export const setTypeList = (typeList: TypeModel[]): ITypeAction => {
  return {
    type: actionTypes.type.SET_ALL,
    payload: {
      typeList
    }
  }
}