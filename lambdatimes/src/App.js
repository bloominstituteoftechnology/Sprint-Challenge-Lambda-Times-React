import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Carousel />
      <Content />
    </div>
  );
}

export default App;
