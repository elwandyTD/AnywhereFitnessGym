import actionTypes from "./actionTypes";
import { IMiscAction, IMiscState } from "./types";

export const setState = (state: IMiscState): IMiscAction => {
  return {
    type: actionTypes.SET_STATE,
    payload: {
      state
    }
  }
}