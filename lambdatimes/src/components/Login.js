import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit = () => {
    if (this.state.username && this.state.password) {
      localStorage.setItem('username', this.state.username);
      localStorage.setItem('password', 'true');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleChange}/>
        <input type="password" name="password" onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default Login;