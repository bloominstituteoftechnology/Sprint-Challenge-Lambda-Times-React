import React, { Component } from "react";
import Login from "../components/Login/Login";

const Auth = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      this.setState({
        isLoggedIn: true
      });

      if (!localStorage.getItem("username")) {
        this.setState({
          isLoggedIn: false
        });
      } else {
        this.setState({
          isLoggedIn: true
        });
      }
    }

    render() {
      if (this.state.isLoggedIn) return <App />;
      return <Login />;
      // return <App />
    }
  };

export default Auth;
