import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "../NotFound";
import PrivateRoute from "../PrivateRoute";
import GuestRoute from "../GuestRoute";

import Login from "../Login";
import Profile from "../Profile";
import News from "../News";
import HomePage from "../HomePage";

const Routing = () => {
  const isAuthorized = localStorage.getItem("isAuthorized");

  return (
    <div className="flex h-screen h-full font-sans font-medium">
      <Switch>
        <GuestRoute exact path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/news" component={News} />

        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default Routing;
