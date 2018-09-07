import React, { Component } from "react";
import Authenticate from './components/Authenticate/Authenticate';
import CardsPage from './components/Content/CardsPage'

class App extends Component{
  constructor() {
    super() ;
    this.state = {};
  }
  render(){
  return (
    <div>
     <CardsPage />
    </div>
    );
  }
}



export default Authenticate(App);
