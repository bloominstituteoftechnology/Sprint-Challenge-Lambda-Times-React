import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authenticate from './Authenticate';


const App = (props) => {
  return (
    <div className="App">
      <TopBar logout={props.logout} loggedIn={props.loggedIn}/>
      <Header />
      <Content />
    </div>
  );
}

export default Authenticate(App);
