import React from 'react';
// import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Login from './components/Login';
import Header from './components/Header';
import Content from './components/Content/Content';
import Auth from './components/Auth';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default Auth(App);
