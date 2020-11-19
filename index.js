import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reducerA from "./src/store/reducerA";
import reducerB from "./src/store/reducerB";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
