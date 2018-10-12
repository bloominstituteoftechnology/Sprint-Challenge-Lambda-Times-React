import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  
  state = {
    username: '',
    password: '',
    toggleToReload: false,
  }

  login = () => {
    localStorage.setItem('username', JSON.stringify({username: this.state.username, password: this.state.password}));
    this.setState({toggleToReload: !this.state.toggleToReload});
  }

  handleInputText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {  
    return (
      <div className="login">
        <form onSubmit={this.login} className="login-container">
          <input className="login-username" onChange={this.handleInputText} type="text" placeholder="username" name="username" />
          <input className="login-password" placeholder="password" onChange={this.handleInputText} type="password" name="password" />
          <button type="submit" onClick={this.login}>Login</button>
        </form>
      </div>
    )
  }
}