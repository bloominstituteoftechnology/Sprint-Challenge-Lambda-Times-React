import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    localStorage.setItem('username', username);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <h2>Please Log In</h2>
        <input
          placeholder="username"
          value={this.state.username}
          name="username"
          onChange={this.handleInput}
        />
        <input
          placeholder="password"
          value={this.state.password}
          name="password"
          onChange={this.handleInput}
        />
        <button onClick={this.handleLoginSubmit}>LOG IN</button>
      </div>
    );
  }
}

export default Login;
