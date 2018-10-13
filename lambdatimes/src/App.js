import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Styled from 'styled-components';

const StyledApp = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  return (
    <StyledApp>
      <TopBar />
      <Header />
      <Content />
  </StyledApp>
  );
}

export default App;
