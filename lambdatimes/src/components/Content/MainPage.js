import React, { Component, Fragment } from "react";
import Header from "../Header";
import Content from "./Content";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    );
  }
}

export default MainPage;
