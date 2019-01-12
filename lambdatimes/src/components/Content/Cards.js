import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
    
      {props.cards.map((card, index) => {
        return (
          <Card 
            key={index}
            card={card}
          />
        )
      })}
      
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propType = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;