import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Alert from "react-s-alert";

import Routing from "./Routing";

import store from "../store";

import "react-s-alert/dist/s-alert-default.css";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Alert stack={{ limit: 3 }} position="top-right" />
      <Routing />
    </BrowserRouter>
  </Provider>
);

export default App;
