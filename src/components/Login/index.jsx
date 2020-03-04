import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Alert from "react-s-alert";

import { setAuthStatus } from "./actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (email === "Admin" && password === "12345") {
      localStorage.setItem("auth", true);
      dispatch(setAuthStatus(true));
    } else {
      Alert.error("Wrong email or password!");
    }
  };

  return (
    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div className="card card-signin my-5" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form className="form-signin">
            <div className="form-label-group">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
            </div>

            <div className="form-label-group mt-3">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-lg btn-outline-dark btn-block text-uppercase mt-5"
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
