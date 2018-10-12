import React from "react";
import {
  LoginPage,
  LoginForm,
  LoginInput,
  LoginButton
} from "./Content/Styles";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = (key, value) => {
    //this func keeps updating state's username and password when typing into fields
    this.setState({
      [key]: value
    });
  };

  login = () => {
    //first check to make sure something was entered in both fields. if not, calls alert
    if (this.state.username && this.state.password) {
      localStorage.setItem("username", this.state.username);
      this.setState({
        username: "",
        password: ""
      });
    } else {
      alert("Please fill out both username and password fields");
    }
  };

  render() {
    return (
      <LoginPage>
        <h1>Lambda Times</h1>
        <p>Enter your username and password to log in!</p>
        <LoginForm onSubmit={this.login}>
          <LoginInput
            type="text"
            placeholder="Username"
            onChange={event =>
              this.changeHandler("username", event.target.value)
            }
            value={this.state.username}
          />
          <LoginInput
            type="text"
            placeholder="Password"
            onChange={event =>
              this.changeHandler("password", event.target.value)
            }
            value={this.state.password}
          />
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginPage>
    );
  }
}

export default Login;
