import React, { useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import NotFound from "../NotFound";
import PrivateRoute from "../PrivateRoute";
import GuestRoute from "../GuestRoute";

import Header from "../Header";
import Login from "../Login";
import Profile from "../Profile";
import News from "../News";
import HomePage from "../HomePage";

import { setAuthStatus } from "../Login/actions";

const Routing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthorized = JSON.parse(localStorage.getItem("auth"));
    dispatch(setAuthStatus(isAuthorized));
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <GuestRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/news" component={News} />

          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default Routing;
