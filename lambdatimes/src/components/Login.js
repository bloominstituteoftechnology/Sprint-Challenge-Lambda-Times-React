import React from 'react';
import styled, { css } from 'styled-components';

const LoginDiv = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  pointer-events: auto;
  background-color: rgba(0,0,0,.8);
  z-index: 99999;

  ${props => props.active && css`
    display: flex;
  `}
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 500px;
  min-width: 300px;
  margin: 50px auto;
  padding: 30px 20px 20px;
  border-radius: 10px;
  background-color: #fff;
`;

const LoginInput = styled.input`
  margin: 0 0 10px 0;
  padding: 10px;
`;

const LoginButton = styled.button`
  padding: 10px;
`;

const Login = props => {
  return(
    <LoginDiv>
      <LoginForm onSubmit={(e) => props.onSubmitLogin(e)}>
        <LoginInput type="text" placeholder="Username" value={props.username} onChange={props.onUsernameChange} />
        <LoginButton type="submit">Sign in</LoginButton>
      </LoginForm>
    </LoginDiv>
  );
}

export default Login;