import React, { Component } from "react";

class Login extends Component {
 
  render() {
    return (
      <div className="loginScreen">
        <h1>Lambda Times! Login below</h1>
        <form onSubmit={e => this.props.login(e)} className="loginForm">
          <span>username</span>
          <input onChange={e => {this.props.changeHandler(e)}} type="text" />
          <span>password</span>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
