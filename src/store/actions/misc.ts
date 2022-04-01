import actionTypes from "Store/actionTypes";
import { IMiscAction, IMiscPayloadState } from "StoreTypes/misc";

import * as categoryService from "Services/category";
import * as typesService from "Services/types";
import * as classService from "Services/class";
import { setClassList } from "./class";
import { setCategoryList } from "./category";
import { setTypeList } from "./type";

export const setState = (state: IMiscPayloadState): IMiscAction => {
  return {
    type: actionTypes.misc.SET_STATE,
    payload: {
      state
    }
  }
}

export const initProject = () => {
  return async (dispatch: any) => {
    try {
      const requests = [
        classService.getAll().then(res => dispatch(setClassList(res.data?.data || []))),
        categoryService.getAll().then(res => dispatch(setCategoryList(res.data?.data || []))),
        typesService.getAll().then(res => dispatch(setTypeList(res.data?.data || []))),
      ];

      const req = Promise.all(requests);

      req.then((_) => {
        dispatch(setState({ loadingSplahsreen: false, firstLoad: true }));
      });

      req.catch(e => {
        console.log(e, "Error")
      });
    } catch (e) {
      console.log(e, "MISC");
    }
  }
}