import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { setAuthStatus } from "../Login/actions";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state => state.auth.isAuthorized);

  const handleLogout = () => {
    localStorage.setItem("auth", false);
    dispatch(setAuthStatus(false));
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">BlogStop</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-3" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/news">
                News
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {isAuthorized ? (
            <button className="btn btn-outline-dark" onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
