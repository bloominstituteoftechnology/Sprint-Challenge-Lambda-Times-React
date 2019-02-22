import React, { Component } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import styled from "styled-components";

const LoginPage = styled.div`
  margin: 0 auto;
  text-align: center;
  h1 {
    font-size: 70px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
  p {
    font-size: 20px;
  }
  
  ${props => (props.subH1 ? `font-size:55px;` : null)}
`;
const LoginForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const LoginInput = styled.input`
  width: 75%;
  margin: 10px auto;
  padding: 15px 0;
  height: 20px;
  text-indent: 15px;
  border-radius: 5px;
  border: 2px solid black;
  
`;
const LoginButton = styled.button`
  width: 70%;
  margin: 5% auto;
  border-radius: 8px;
  border: 1px solid black;
  height: 35px;
  background: white
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
    <LoginPage>
       <Header />
       {/* <Header /> */}
        <LoginForm>
          <h1 subH1>Welcome</h1>
          <h2>Please enter your username<br></br> and password to access your feed.</h2>
            <LoginInput
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <LoginInput
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <LoginButton onClick={this.handleLogin}>Log In</LoginButton>
        </LoginForm>
    </LoginPage>
    );
  }
}

export default Login;