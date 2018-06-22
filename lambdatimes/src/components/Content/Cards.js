import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  let cardElems = props.cards.map( (card) => <Card card={card} key={card.headline} />)
  return (
    <div className="cards-container">
      {cardElems}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;