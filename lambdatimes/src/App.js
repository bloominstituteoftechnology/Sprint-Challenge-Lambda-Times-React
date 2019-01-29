import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Tabs from './components/Content/Tabs';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Tabs />
      <Content contentStuff = {Content}/>
      
    </div>
  );
}

export default App;
