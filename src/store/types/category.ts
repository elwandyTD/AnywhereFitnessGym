
import { CategoryModel } from "Types/category";

export interface ICategoryState {
  categoryList: CategoryModel[];
}

export interface ICategoryPayloadState {
  categoryList?: CategoryModel[];
}

export interface ICategoryPayload {
  state?: ICategoryPayloadState;
  categoryList?: CategoryModel[];
}

export interface ICategoryAction {
  type: string;
  payload?: ICategoryPayload;
}

// export type CategoryDispatchType = (args: ICategoryAction) => ICategoryAction