import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';


const App = props => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content 
      tabData ={props.tabData}
      cardData ={props.cardData}
      carouselData={props.carouselData}
      />
    </div>
  );
}

export default App;
