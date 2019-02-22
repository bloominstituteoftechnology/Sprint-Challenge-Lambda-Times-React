import React, { Component } from 'react';
import TopBar from './TopBar';
import Header from './Header';

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
    <div>
       <TopBar />
       <Header />
        <form className="login-form">
          <h1>Welcome to ReactAgram</h1>
          <h2>Please Login</h2>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleLogin}>Log In</button>
        </form>
    </div>
    );
  }
}

export default Login;