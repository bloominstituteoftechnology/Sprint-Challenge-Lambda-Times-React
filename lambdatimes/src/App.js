import React from 'react';
// import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Login from './components/Login';
import Header from './components/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="App">
      <Login />
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
