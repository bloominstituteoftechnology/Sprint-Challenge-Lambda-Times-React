import React, { Component } from 'react';
import PropTypes from "prop-types";
import Card from './Card';

const Cards = props => {
  //  deconstruction of props object
  const {cards} = props
  console.log("Cards", props)
  return (
    
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      
      {cards.map(card => (
        <Card key={card.headline}
              card={card}
        />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }))
}

export default Cards;