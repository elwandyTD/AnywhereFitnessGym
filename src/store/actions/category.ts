import actionTypes from "../actionTypes";
import { ICategoryAction, ICategoryPayloadState } from "StoreTypes/category";
import { CategoryModel } from "Types/category";

export const setCategoryList = (categoryList: CategoryModel[]): ICategoryAction => {
  // console.log(categoryList);

  return {
    type: actionTypes.category.SET_ALL,
    payload: {
      categoryList
    }
  }
}