import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: "PT Sans", sans-serif;
`;

const LoginFailedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
`;

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
        <AppWrapper>
          <TopBar />
          <Header />
          <LoginFailedWrapper>
            <h1>Please Login to View Articles</h1>
            <p>Thank you for visiting LambdaTimes.com!</p>
          </LoginFailedWrapper>
        </AppWrapper>
      );
    }
  };
};

export default HOC;
