import actionTypes from "Store/actionTypes";
import { IMiscAction, IMiscState } from "Store/types/misc";

export const setState = (state: IMiscState): IMiscAction => {
  return {
    type: actionTypes.misc.SET_STATE,
    payload: {
      state
    }
  }
}