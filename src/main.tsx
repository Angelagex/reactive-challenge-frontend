import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./state/Store";
import {BrowserRouter,} from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
