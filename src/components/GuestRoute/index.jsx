import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = props => {
  const isAuthorized = useSelector(state => state.auth.isAuthorized);

  return isAuthorized ? <Redirect to="/" /> : <Route {...props} />;
};

export default GuestRoute;
