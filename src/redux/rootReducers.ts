import { AnyAction, combineReducers } from "redux";

import miscReducer from "./misc/reducer";
import { IMiscAction, IMiscState } from "./misc/types";

export interface IAppState {
  misc: IMiscState
}

export interface IAppAction {
  misc: IMiscAction
}

const reducers = combineReducers<IAppState, AnyAction>({
  misc: miscReducer
});

export default reducers;