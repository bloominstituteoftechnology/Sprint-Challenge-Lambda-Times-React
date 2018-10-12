import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import * as styles from './components/styleComponents.js';

const App = () => {
  return (
    <styles.App>
      <TopBar />
      <Header />
      <Content />
    </styles.App>
  );
};

export default App;
