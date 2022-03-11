import { IClassState, IClassAction } from "StoreTypes/class";
import actionTypes from "../actionTypes";

const initialState: IClassState = {
  classList: [],
  loading: false,
}

const classReducer = (state: IClassState = initialState, action: IClassAction): IClassState => {
  switch (action.type) {
    case actionTypes.class.SET_ALL: {
      return {
        ...state,
        classList: action.payload?.classList || []
      }
    }
  }

  return state;
}

export default classReducer;