import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((element,i) => <Card key={i} card={element}/>)}
    </div>
  )
}

Cards.proptypes = {
  cards: PropTypes.array
}

export default Cards;