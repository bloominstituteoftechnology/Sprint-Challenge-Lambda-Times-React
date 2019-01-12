import React from "react";
import Login from "./Login";
import styled from "styled-components";

const LoginContainer = styled.div`
  margin-top: 1rem;
  width: 26rem;
  text-align: center;
`;

const Error = styled.div`
  color: #ff0033;
  border: 1px solid #ff0033;
  border-radius: 3px;
  padding: 0.25rem 0 0.5rem;
`;

// window.localStorage.setItem("loggedIn", false);
let status = window.localStorage.getItem("loggedIn");

const Authenticate = ReactComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: status,
        error: "",
        errorState: false
      };
    }
    signIn = (e, user, pass) => {
      e.preventDefault();
      window.localStorage.setItem("loggedIn", true);
      window.localStorage.setItem("user", user);
      status = window.localStorage.getItem("loggedIn");
      if (pass.length > 0 && user.length > 0) {
        if (user.length <= 12) {
          this.setState({
            loggedIn: status
          });
        } else {
          this.setState({
            error: <div>username is too long</div>,
            errorState: "true"
          });
        }
      } else {
        this.setState({
          error: <div>username or password field is empty</div>,
          errorState: "true"
        });
      }
    };
    render() {
      return this.state.loggedIn === "true" ? (
        <ReactComponent />
      ) : this.state.loggedIn === "false" ? (
        <LoginContainer>
          {this.state.errorState ? <Error>{this.state.error}</Error> : null}
          <Login signIn={this.signIn} />
        </LoginContainer>
      ) : (
        <LoginContainer>
          {this.state.errorState ? <Error>{this.state.error}</Error> : null}
          <Login signIn={this.signIn} />
        </LoginContainer>
      );
    }
  };
};
export default Authenticate;
