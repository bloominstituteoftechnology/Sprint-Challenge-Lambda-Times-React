import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLoginSubmit = e => {
    if (this.state.username) {
      localStorage.setItem("user", this.state.username);
      window.location.reload();
    }
  };
  render() {
    return (
      <div className="loginDiv">
        <form>
          <h1>Welcome To Lambda Times</h1>
          <div className="loginInput">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleInputChange}
              value={this.state.username}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
              required
            />
            <input
              type="submit"
              value="Sign up"
              onClick={this.handleLoginSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
