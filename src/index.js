import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers";
import "./index.css";
import App from "./App";

const store = createStore(todoApp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
