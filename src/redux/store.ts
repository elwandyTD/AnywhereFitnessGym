import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import thunk from "redux-thunk";
import reducers, { IAppState } from "./rootReducers";

const middlewares = [thunk];

const store: Store<IAppState, AnyAction> = createStore(reducers, applyMiddleware(...middlewares))

export default store;

