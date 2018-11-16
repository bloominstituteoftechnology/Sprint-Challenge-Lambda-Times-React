import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import authenticateHOC from './components/Authenticate';
import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    body {
        background-color: #f1f1f1;
        color: #333;
        font-family: 'PT Sans', sans-serif;
        margin: 0;
        padding: 0;
    }

    html {
      margin: 0;
      padding: 0;
    }

    #root {
      width: 100%;
    }

    @font-face {
      font-family: 'PT Sans';
      font-style: italic;
      font-weight: 400;
      src: local('PT Sans Italic'), local('PTSans-Italic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf) format('truetype');
    }
    @font-face {
      font-family: 'PT Sans';
      font-style: italic;
      font-weight: 700;
      src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizdRExUiTo99u79D0e8fOydLxUY.ttf) format('truetype');
    }
    @font-face {
      font-family: 'PT Sans';
      font-style: normal;
      font-weight: 400;
      src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KEwA.ttf) format('truetype');
    }
    @font-face {
      font-family: 'PT Sans';
      font-style: normal;
      font-weight: 700;
      src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v9/jizfRExUiTo99u79B_mh0O6tKA.ttf) format('truetype');
    }
`;

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  return (
    <AppDiv >
      <GlobalStyle />
      <TopBar />
      <Header />
      <Content />
    </AppDiv>
  );
}

export default authenticateHOC(App);
