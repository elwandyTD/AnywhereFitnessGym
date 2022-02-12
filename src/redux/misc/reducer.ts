import actionTypes from "./actionTypes";
import { IMiscAction, IMiscState } from "./types";

const intialState: IMiscState = {
  counter: 0
}

const miscReducer = (state: IMiscState = intialState, action: IMiscAction): IMiscState => {
  switch (action.type) {
    case actionTypes.SET_STATE: 
      return {
        ...state,
        ...action.payload?.state || {}
      }
      
    default: 
      return state;
  }
}

export default miscReducer;