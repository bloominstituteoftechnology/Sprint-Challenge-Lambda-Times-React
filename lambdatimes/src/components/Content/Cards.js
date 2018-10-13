import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map((card)   =>  <Card card={card}/>)}
    </div>
  )
}

Cards.PropTypes = {
  cards: PropTypes.func.isRequired
}

export default Cards;