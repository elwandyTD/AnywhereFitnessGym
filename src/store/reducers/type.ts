import { ITypeState, ITypeAction } from "StoreTypes/type";
import actionTypes from "../actionTypes";

const initialState: ITypeState = {
  typeList: []
}

const typeReducer = (state: ITypeState = initialState, action: ITypeAction): ITypeState => {
  switch (action.type) {
    case actionTypes.type.SET_ALL: {
      return {
        ...state,
        typeList: action.payload?.typeList || []
      }
    }
  }

  return state;
}

export default typeReducer;