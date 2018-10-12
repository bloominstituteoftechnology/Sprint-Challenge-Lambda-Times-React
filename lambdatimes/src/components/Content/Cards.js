import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component{
  constructor(props){
  super(props);
  this.state={

  }
}
render() {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => <Card key={index} card={card} />)}
    </div>
  )
}
}

// Make sure you include prop types for all of your incoming props

export default Cards;