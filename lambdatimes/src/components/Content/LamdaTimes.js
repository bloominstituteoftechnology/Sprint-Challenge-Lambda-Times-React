import React, { Component } from "react";
import TopBar from "../TopBar";
import Header from "../Header";
import Content from "./Content";

class LambdaTimes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LambdaTimes">
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default LambdaTimes;
