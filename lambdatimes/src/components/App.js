import React, { Component } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Content from './Content/Content';

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div className="App">
        <TopBar />
        <Header />
        <Content />
      </div>
    )
  }
}

export default App;
