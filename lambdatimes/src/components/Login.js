import React, { Component } from 'react';
import styled from 'styled-components';


export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: '',
      password: '',
    }
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  logInUser = () => {
    console.log("hi")
    localStorage.setItem('username', this.state.username)
    localStorage.setItem('password', this.state.password)

    if (localStorage.getItem('username') === ""){
      //do nothing
    } else {
      this.setState({
        loggedIn: true
      })
    }
  }
  //inputs stored in local storage
  // submit changes state to true

  //if true return Content
  //if false return Login

  render(){
    return(
      <LoginDiv>
        <form onSubmit={this.logInUser}>
          <Input
            onChange={this.inputHandler}
            name="username"
            value={this.state.username}
            // value={this.state.[this.name]}
            placeholder="Login Name">{this.value}</Input>
          <Input
            onChange={this.inputHandler}
            name="password"
            value={this.state.password} placeholder="Password"></Input>
          <Button>BUTTON</Button>
        </form>
      </LoginDiv>
    )
  }
}

const LoginDiv = styled.div`
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
const Input = styled.input`
  border: 1px solid green;
  width: 300px;
  padding: 4px;
  font-style: italic;
  color: gray;
`;
const Button = styled.button`
  width: 100%;
  height: 40vh;
`;
