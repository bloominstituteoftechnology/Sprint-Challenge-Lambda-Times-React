import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop
          
          Maps over the Cards, returning a card component with its own card and key values
          */}
      {props.cards.map ((card, index) => {
        return <Card key = {index} card = {card} /> 
      })}
      
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
 Cards.propTypes = {
   cards: PropTypes.array
 }

export default Cards;