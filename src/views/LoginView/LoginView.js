import React, { Component } from "react";
import { connect } from "react-redux";
import PT from "prop-types";
import authOperations from "../../redux/auth/auth-operations";
import { Button, Form, Col, Row } from "react-bootstrap";
import "./LoginView.scss";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <h2 className="login-title">Authorization</h2>
        <Form className="form" onSubmit={this.handleSubmit} autoComplete="off">
          <Row>
            <Col>
              <Form.Control
                className="form__item"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </Col>
            <Col>
              <Form.Control
                className="form__item"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </Col>
          </Row>
          <Button
            className="form__submit"
            type="submit"
            size="sm"
            variant="outline-info"
          >
            LogIn
          </Button>
        </Form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

LoginView.propTypes = {
  onLogin: PT.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginView);
