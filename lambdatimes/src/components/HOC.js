import React, { Fragment } from "react";
import TopBar from "./TopBar";
import Content from "./Content/Content";
import Header from "./Header";
import App from "../App";

const HOC = Content => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    }

    render() {
      if (this.state.isLoggedIn) {
        return <Content />;
      }
      return (
        <Fragment>
          <TopBar />
          <Header />
        </Fragment>
      );
    }
  };
};

export default HOC;
