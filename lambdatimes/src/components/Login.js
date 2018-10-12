import React, { Component } from "react";
import styled from 'styled-components';


const LoginForm = styled.form`
    width: 500px;
    height: 280px;
    padding: 15px;
    border-radius: 5px;
    margin: 200px auto;
    background: #882829;
    color: white;
`;

const LoginGroup = styled.div`
    margin: 15px 0;
`;

const LoginInput = styled.input`
    width: 100%;
    height: 30px;
`;

const LoginButton = styled.button`
    height: 40px;
    width: 80px;
    border-radius: 5px;
    font-size: 20px;

`;


class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: ""
      };
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      handleLoginSubmit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };

      render() {
          return (
            <LoginForm onSubmit={this.handleLoginSubmit}>
            <h2>Lambda Times</h2>
            <div>Login</div>
          <LoginGroup>
            <LoginInput
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </LoginGroup>
          <LoginGroup>
            <LoginInput
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </LoginGroup>
          <LoginButton
            onClick={this.handleLoginSubmit}
          >
            Login
          </LoginButton>
        </LoginForm>
          );
      }
}

export default Login;