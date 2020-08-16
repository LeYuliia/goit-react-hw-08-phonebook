import React from "react";
import PT from "prop-types";
import { connect } from "react-redux";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import authSelectors from "../../redux/auth/auth-selectors";
import "./AppBar.scss";

const AppBar = ({ isAuthenticated }) => (
  <header className="menu">
    {isAuthenticated ? <UserMenu /> : <AuthNav />}{" "}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

AppBar.propTypes = {
  isAuthenticated: PT.bool.isRequired,
};

export default connect(mapStateToProps)(AppBar);
