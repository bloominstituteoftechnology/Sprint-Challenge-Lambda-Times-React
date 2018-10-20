import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class Cards extends Component{
  constructor(props){
  super(props);
  this.state={
    cards: props.cards
  }
}
render() {
  return (
    <div className="cards-container">
      {this.props.cards.map((card, index) => <Card key={index} card={card} />)}
    </div>
  )
  }
}

Cards.propTypes = {
  cards: PropTypes.array
}

export default Cards;
