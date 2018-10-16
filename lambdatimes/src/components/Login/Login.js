import React, { Component } from 'react';
import TopBar from '../TopBar';
import Header from '../Header';
import LoginForm from '../Login/LoginForm';
import Styled from 'styled-components';

const StyledApp = Styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
  margin: 0;
  padding: 0;
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 400;
    src: local('PT Sans Italic'), local('PTSans-Italic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf) format('truetype');
  }`;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      usernameInput: '',
      passwordInput: '',
      username: '',
      nickname: '',
      password: ''
    }
  }
  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  login = (e) => {
    e.preventDefault();
    let formChildren = e.target.childNodes;
    let username = '';
    let password = '';
    formChildren.forEach(element => {
      if (element.localName === 'input') {
        if(element.name === 'username') {
          username = element.value;
        }
        if(element.name === 'password') {
          password = element.value;
        }
      }
    })
    return this.props.checkCombo(username,password);
  }
  render() {
    return (
      <StyledApp>
        <TopBar />
        <Header />
      <LoginForm login={this.login}
                  Username={this.changeUsername}
                  Password={this.changePassword}/>
      </StyledApp>
    );
  }
}

export default Login;
