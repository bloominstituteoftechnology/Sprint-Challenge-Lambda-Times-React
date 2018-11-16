import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((singularCard) => {
        return (
          <Card
            headline={singularCard.headline}
            cardImg={singularCard.img}
            author={singularCard.author}
          />
        
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
