import { ICategoryState, ICategoryAction } from "StoreTypes/category";
import actionTypes from "../actionTypes";

const initialState: ICategoryState = {
  categoryList: []
}

const categoryReducer = (state: ICategoryState = initialState, action: ICategoryAction): ICategoryState => {
  switch (action.type) {
    case actionTypes.category.SET_ALL: {
      return {
        ...state,
        categoryList: action.payload?.categoryList || []
      }
    }
  }

  return state;
}

export default categoryReducer;