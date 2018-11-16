import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import HOC from "./components/HOC";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: "PT Sans", sans-serif;
`;

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <TopBar />
      <Header />
      <Content />
    </AppWrapper>
  );
};

export default HOC(App);
