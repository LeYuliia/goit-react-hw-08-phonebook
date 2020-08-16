import React from "react";
import { connect } from "react-redux";
import PT from "prop-types";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import { Button } from "react-bootstrap";

const UserMenu = ({ email, onLogOut }) => (
  <>
    <p className="menu__email">{email}</p>
    <Button
      type="button"
      onClick={onLogOut}
      className="menu__logout"
      size="sm"
      variant="outline-info"
    >
      LogOut
    </Button>
  </>
);

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

UserMenu.propTypes = {
  email: PT.string.isRequired,
  onLogOut: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
