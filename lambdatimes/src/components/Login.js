import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoginInputs = styled.input`
  padding: 1rem;
  border-radius: 5px;
  margin: 2rem;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLogin = e => {
    let username = this.state.username;
    localStorage.setItem("username", username);
    window.location.reload();
  };

  render() {
    return (
      <LoginForm className="text-center">
        <Form className="pt-5">
          <FormGroup className="text-left">
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username..."
            />
          </FormGroup>
          <FormGroup className="text-left">
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              className="mb-4"
              id="password"
              placeholder="Enter Password..."
            />
          </FormGroup>
          <Button className="pl-5 pr-5">Submit</Button>
        </Form>
      </LoginForm>
    );
  }
}

Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  className: PropTypes.string
};

Form.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  className: PropTypes.string
};

FormGroup.propTypes = {
  children: PropTypes.node,
  // Applied the row class when true, does nothing when false
  row: PropTypes.bool,
  // Applied the form-check class when true, form-group when false
  inline: PropTypes.bool,
  // Applied the disabled class when the check and disabled props are true, does nothing when false
  disabled: PropTypes.bool,
  // Pass in a Component to override default element
  className: PropTypes.string
};

FormText.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  color: PropTypes.string, // default: 'muted'
  className: PropTypes.string
};

export default Login;
