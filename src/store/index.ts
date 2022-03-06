import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import thunk from "redux-thunk";

import reducers from "Reducers";

const middlewares = [thunk];

const store: Store<AppStore.AppState, AnyAction> = createStore(reducers, applyMiddleware(...middlewares))

export default store;

