import { AnyAction, combineReducers } from "redux";

import classReducer from "Reducers/class";
import miscReducer from "Reducers/misc";
import { IClassAction, IClassState } from "StoreTypes/class";
import { IMiscAction, IMiscState } from "StoreTypes/misc";
import { ITypeAction, ITypeState } from "StoreTypes/type";
import { ICategoryAction, ICategoryState } from "StoreTypes/category";
import categoryReducer from "./category";
import typeReducer from "./type";

// import {  } from "StoreTypes/*";

export interface IAppState {
  misc: IMiscState;
  class: IClassState;
  type: ITypeState;
  category: ICategoryState
}

export interface IAppAction {
  misc: IMiscAction;
  class: IClassAction;
  type: ITypeAction;
  category: ICategoryAction;
}

declare global {
  namespace AppStore {
    interface AppState extends IAppState {}
    interface AppAction extends IAppAction {}
  }
}

const reducers = combineReducers<AppStore.AppState, AnyAction>({
  misc: miscReducer,
  class: classReducer,
  category: categoryReducer,
  type: typeReducer
});

export default reducers;