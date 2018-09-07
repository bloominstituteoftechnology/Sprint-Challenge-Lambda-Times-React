import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} name="username" value={this.state.username} placeholder="username"/>
        <input type="text" onChange={this.handleInput} name="password" value={this.state.name} placeholder="password"/>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default Login;
