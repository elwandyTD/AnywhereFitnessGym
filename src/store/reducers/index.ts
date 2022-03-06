import { AnyAction, combineReducers } from "redux";

import miscReducer from "Reducers/misc";
import { IMiscAction, IMiscState } from "Store/types/misc";

export interface IAppState {
  misc: IMiscState
}

export interface IAppAction {
  misc: IMiscAction
}

declare global {
  namespace AppStore {
    interface AppState extends IAppState {}
    interface AppAction extends IAppAction {}
  }
}

const reducers = combineReducers<AppStore.AppState, AnyAction>({
  misc: miscReducer
});

export default reducers;