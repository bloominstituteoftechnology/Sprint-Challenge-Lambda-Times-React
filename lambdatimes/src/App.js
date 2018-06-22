import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import Authenticate from './components/Authentication/Authenticate';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  return (
    <AppDiv>
      <Login />
      <TopBar />
      <Header />
      <Authenticate app={Content} />
    </AppDiv>
  );
}

export default App;
