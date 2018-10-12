import React from 'react';
import styled from 'styled-components';
import { Input } from '../Styles/Input';

const LoginForm = styled.form`
  margin: 2rem auto 0;
  max-width: 400px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 4.5rem;
  border: 1px solid #dbdbdb;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.2);
`;

const LoginHeading = styled.h1`
  text-align: center;
  font-family: serif;
`;

const LoginButton = styled.button`
  background: #5097e9;
  color: #fff;
  padding: 5px;
  border-radius: 2.5px;
  border: none;
  font-size: inherit;
  cursor: pointer;
  margin-top: 1rem;
`;

const Login = ({ loginInput, validateUser }) => {
  return (
    <LoginForm onSubmit={validateUser}>
      <LoginHeading>Login</LoginHeading>
      <Input
        login
        type="text"
        placeholder="Username"
        onChange={loginInput}
        name="username"
      />
      <Input
        login
        type="password"
        placeholder="Password"
        onChange={loginInput}
        name="password"
      />
      <LoginButton>Log in </LoginButton>
    </LoginForm>
  );
};

export default Login;
