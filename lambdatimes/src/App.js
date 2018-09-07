import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authenticate from './components/Authentication/Authenticate';

const AuthContent = Authenticate(Content);

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <AuthContent />
    </div>
  );
}

export default App;
