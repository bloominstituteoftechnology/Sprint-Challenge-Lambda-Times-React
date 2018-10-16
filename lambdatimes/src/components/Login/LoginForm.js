import React, { Component } from 'react';
import Styled from 'styled-components';

const Header = Styled.section`
    background-color: lightgray;
`;
const Error = Styled.p`
  color: red;
`
const LoginBody = Styled.form`
  background-color: lightgray;
  color: orange;
  display: flex;
  flex-direction: column;
  width: 600px;
`;
const FormLabels = Styled.label`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
`;
const FormInputs = Styled.input`
  border: 2px solid darkgray;
  border-radius: 3px;
  font-size: 20px;
  width: 300px;
`;
const LoginBtn = Styled.button`
  background-color: darkgray;
  color: white;
  font-size: 20px;
  padding: 3px 0;
  width: 200px;
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: 'Enter a valid Username and Password combination'
    }
  }
  render() {
    return (
      <section>
        <Header>
          <h1>Submit Form to Log In</h1>
        <Error>{this.state.error}</Error>
        </Header>
        <LoginBody onSubmit={this.props.login}>
          <FormLabels htmlFor='username' >
            Username:
          </FormLabels>
            <FormInputs type='text' name='username' onChange={this.props.Username} />
          <FormLabels htmlFor='password' >
            Password:
          </FormLabels>
            <FormInputs type='password' name='password' onChange={this.props.Password} />
          <LoginBtn type='submit' name='submit'>Login</LoginBtn>
        </LoginBody>
      </section>
    );
  }
}

export default LoginForm;
