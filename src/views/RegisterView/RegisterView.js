import React, { Component } from "react";
import { connect } from "react-redux";
import PT from "prop-types";
import authOperations from "../../redux/auth/auth-operations";
import { Button, Form, Col, Row } from "react-bootstrap";
import "./RegisterView.scss";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <section>
        <h2 className="register-title">Signup form</h2>
        <Form className="form" onSubmit={this.handleSubmit} autoComplete="off">
          <Row>
            <Col>
              <Form.Control
                className="form__item"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Your name"
              />
            </Col>
            <Col>
              <Form.Control
                className="form__item"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Your Email"
              />
            </Col>
            <Col>
              <Form.Control
                className="form__item"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Create password"
              />
            </Col>
          </Row>
          <Button
            className="form__submit"
            type="submit"
            size="sm"
            variant="outline-info"
          >
            SignUp
          </Button>
        </Form>
      </section>
    );
  }
}

const dispatchToProps = (dispatch) => ({
  onRegister: (data) => dispatch(authOperations.register(data)),
});

RegisterView.propTypes = {
  onRegister: PT.func.isRequired,
};

export default connect(null, dispatchToProps)(RegisterView);
