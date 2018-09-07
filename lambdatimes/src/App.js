import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import styled from 'styled-components';

// Styles
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

// Main App
const App = () => {
  return (
    <Div className="App">
      <TopBar />
      <Header />
      <Content />
    </Div>
  );
}

export default App;
