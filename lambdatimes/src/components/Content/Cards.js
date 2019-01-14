import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  //  deconstruction of props object
  const {cards} = props
  console.log("Cards", props)
  return (
    
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

      {/* const { selectedTab, selectedTabHandler } = props */}
      
      {cards.map(card => (
        <Card key={card.headline}
              card={card}
        />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;