import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
const rootReducer = combineReducers({ globalReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));
