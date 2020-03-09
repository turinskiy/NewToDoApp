import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { addIntoToDoList } from "./redux/reducers";

import AppComponent from "./App";

const store = createStore(addIntoToDoList);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  rootElement
);
