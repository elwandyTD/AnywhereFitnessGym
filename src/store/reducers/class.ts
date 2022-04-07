import { IClassState, IClassAction } from "StoreTypes/class";
import actionTypes from "../actionTypes";

const initialState: IClassState = {
  classList: [],
  loading: false,
  detailClass: {},
  filterBy: {
    category: "All",
    name: "",
    types: "All"
  },
  refresh: false
}

const classReducer = (state: IClassState = initialState, action: IClassAction): IClassState => {
  switch (action.type) {
    case actionTypes.class.SET_STATE: {
      return {
        ...state,
        ...action.payload?.state || {}
      }
    }

    case actionTypes.class.SET_ALL: {
      return {
        ...state,
        classList: action.payload?.classList || []
      }
    }

    case actionTypes.class.SET_FILTER: {
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          ...action.payload?.filterBy || {}
        }
      }
    }
    case actionTypes.class.SET_EMPTY_FILTER: {
      return {
        ...state,
        filterBy: {}
      }
    }
  }

  return state;
}

export default classReducer;