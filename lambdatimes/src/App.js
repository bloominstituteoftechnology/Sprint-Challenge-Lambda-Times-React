import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import { AppWrapper } from './styles/AppStyles';

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
