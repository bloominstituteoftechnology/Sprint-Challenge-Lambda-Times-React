import React, { Component } from "react";
import LambdaTimes from "./components/Content/LamdaTimes";
import Login from "./components/Login";
import Authenticate from "./components/Content/Autheticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LambdaTimes />
      </div>
    );
  }
}

export default Authenticate(App, Login);
