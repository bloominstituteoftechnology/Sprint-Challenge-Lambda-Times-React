import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import ThemeProvider from './theme';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;
const App = () => {
  return (
    <ThemeProvider>
      <StyledApp>
        <TopBar />
        <Carousel />
        <Header />
        <Content />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
