import actionTypes from "Store/actionTypes";
import { IMiscAction, IMiscState } from "Store/types/misc";

const intialState: IMiscState = {
  counter: 0
}

const miscReducer = (state: IMiscState = intialState, action: IMiscAction): IMiscState => {
  switch (action.type) {
    case actionTypes.misc.SET_STATE: 
      return {
        ...state,
        ...action.payload?.state || {}
      }
      
    default: 
      return state;
  }
}

export default miscReducer;