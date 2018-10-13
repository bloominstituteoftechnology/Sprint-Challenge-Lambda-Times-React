import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

// Takes in props:
  // - cards: ()

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map( (card) => {
        return(
          <Card card={card} />
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string,
    tab: PropTypes.string
  }))
};
export default Cards;