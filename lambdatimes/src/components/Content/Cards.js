import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map( card => 
         <Card 
         card={card} 
          />
      )}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
}
// Make sure you include prop types for all of your incoming props

export default Cards;