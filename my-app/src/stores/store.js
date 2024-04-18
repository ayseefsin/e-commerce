import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import globalReducer from "../reducers/globalReducer";
import userReducer from "../reducers/userReducer";
import productReducer from "../reducers/productReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
  globalReducer,
  userReducer,
  productReducer,
});
// const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
