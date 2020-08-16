import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import routes from "./routes.js";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute.js";
import PublicRoute from "./components/PublickRoute";
import authOperations from "./redux/auth/auth-operations.js";
import Spinner from "react-bootstrap/Spinner";

const HomeView = lazy(() => import("./views/HomeView"));
const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const PhonebookView = lazy(() => import("./views/PhoneBookView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense
          fallback={
            <>
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
            </>
          }
        >
          <Switch>
            <PublicRoute
              exact
              path={routes.home}
              restricted
              component={HomeView}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.login}
              component={RegisterView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            <PrivateRoute
              path={routes.contacts}
              component={PhonebookView}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
