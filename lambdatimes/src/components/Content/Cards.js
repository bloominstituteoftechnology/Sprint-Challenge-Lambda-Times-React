import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  const {cards} = props;
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        {cards.map(card => {
          return (
              <Card></Card>
          )
        })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;