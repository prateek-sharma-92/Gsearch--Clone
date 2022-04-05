import { createStore } from "redux";
import reducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ reducer });
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
