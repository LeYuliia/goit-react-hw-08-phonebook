import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const AuthNav = () => (
  <ul className="menu__list">
    <li className="menu__list-item">
      <NavLink
        exact
        to={routes.home}
        className="menu__link"
        activeClassName="menu__active"
      >
        Home
      </NavLink>
    </li>
    <li className="menu__list-item">
      <NavLink
        to={routes.login}
        className="menu__link"
        activeClassName="menu__active"
      >
        LogIn
      </NavLink>
    </li>
    <li className="menu__list-item">
      <NavLink
        to={routes.register}
        className="menu__link"
        activeClassName="menu__active"
      >
        SignUp
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
