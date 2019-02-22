import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import LoginPage from './components/Login'
import Authenticate from './components/Authenticate';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default Authenticate(App)(LoginPage)
