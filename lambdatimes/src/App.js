import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import AppStyle from './Styles/App';

const App = () => {
  return (
    <AppStyle>
      <TopBar />
      <Header />
      <Content />
    </AppStyle>
  );
}

export default App;
