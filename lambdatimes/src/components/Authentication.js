import React, { Component } from "react";
import Login from "./Login";

const Authentication = App =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        Authenticated: false
      };
    }

    submit = () => {
      if (sessionStorage.getItem("authenticated")) {
        this.setState(prevState => {
          return {
            Authenticated: !prevState.Authenticated
          };
        });
        sessionStorage.clear();
      } else {
        alert("please put a text");
      }
    };

    handleSubmit = () => {};
    render() {
      return this.state.Authenticated ? (
        <App />
      ) : (
        <Login submit={this.submit} />
      );
    }
  };

export default Authentication;
