import React from 'react';
import styled from 'styled-components';
import {Input} from './Input';

const LoginBox = styled.form`
  margin: 2rem auto 0;
  max-width: 400px;
  width: 100%;
  background: #fdfcfc;
  display: flex;
  flex-direction: column;
  padding: 4.5rem;
  border: 1px solid #dddddd;
  box-shadow: 0 3px 6px -3px #0000;
`;

const LoginHeader = styled.h1`
  text-align: center;
  font-family: Belizio;
`;

const LoginBtn= styled.button`
  background: #469af9;
  color: #fdfcfc;
  padding: 5px;
  border-radius: 2.5px;
  border: none;
  font-size: inherit;
  cursor: pointer;
  margin-top: 1rem;
`;

const Login = ({ loginInput, validateUser }) => {
  return (
    <LoginBox onSubmit={validateUser}>
      <LoginHeader>Login</LoginHeader>
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
      <LoginBtn>Log in </LoginBtn>
    </LoginBox>
  );
};

export default Login;
