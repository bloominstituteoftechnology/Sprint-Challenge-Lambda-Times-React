import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
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

export default App;
