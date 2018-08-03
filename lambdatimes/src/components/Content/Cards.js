import React from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card key={card.headline} card={card} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;