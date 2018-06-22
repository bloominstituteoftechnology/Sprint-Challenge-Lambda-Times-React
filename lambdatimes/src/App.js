import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import { AppWrapper } from './style/reusables.js';

const App = () => {
  return (
    <AppWrapper>
      <TopBar />
      <Header />
      <Content />
    </AppWrapper>
  );
}

export default App;
