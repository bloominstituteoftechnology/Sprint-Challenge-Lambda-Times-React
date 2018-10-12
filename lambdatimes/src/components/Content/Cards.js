import React, { Component } from 'react';
import Card from './Card';

const Cards = ({cards}) => {
  return (
    <div className="cards-container">
      {cards.map(card => <Card card={card} key={card.headline} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;