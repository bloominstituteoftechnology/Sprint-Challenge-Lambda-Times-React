import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Tabs from './components/Content/Tabs';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
      <Tabs />
    </div>
  );
}

export default App;
