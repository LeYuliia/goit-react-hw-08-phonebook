import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PT from "prop-types";
import authSelectors from "../redux/auth/auth-selectors";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

PublicRoute.propTypes = {
  isAuthenticated: PT.bool.isRequired,
};

export default connect(mapStateToProps)(PublicRoute);
