import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import authentication from './Authenticate.js';
import Login from './components/Login';
import {AppStyle} from './components/StyledComponents';

const App = () => {
  return (
    <AppStyle>
      <TopBar />
      <Header />
      <Carousel />
      <Content />
    </AppStyle>
  );
}

export default authentication(Login)(App);
