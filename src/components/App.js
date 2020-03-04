import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import Routing from "./Routing";

import store from "store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>
);

export default App;
