import React, { Component } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 20% auto;
`;
const Form = styled.form`
  max-width: 100%;
  text-align: center;
  border: 10px double black;
  padding: 100px 40px;
  background: lightgray;
  border-radius: 10px;
  box-shadow: -1px 1px 8px black;
`;

const Input = styled.input`
  margin-right: 10px;
  font-size: 2rem;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  box-shadow: -1px 1px 8px black;
`;

const Button = styled.button`
  width: 50%;
  margin-top: 20px;
  margin-right: 10px;
  font-size: 2rem;
  padding: 5px 20px;
  border: 1px solid white;
  color: white;
  background: black;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: -1px 1px 8px black;
`;

const LoginPage = props => {
  return (
    <PageContainer>
      <Form onSubmit={props.login}>
        <Input
          type="text"
          placeholder="Username"
          onChange={props.usernameInput}
        />
        <Input
          type="text"
          placeholder="Password"
          onChange={props.passwordInput}
        />
        <Button>Login</Button>
      </Form>
    </PageContainer>
  );
};

export default LoginPage;
