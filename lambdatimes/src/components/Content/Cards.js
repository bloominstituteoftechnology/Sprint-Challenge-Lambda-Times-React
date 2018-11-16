import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

/* Using the cards prop, map over the list creating a 
new Card component for each passing the card as the only prop*/

const Cards = props => {
  let cards = props.cards.map((card, index) => {
    return <Card key={index} card={card} />; 
    });

  return (
    <div className="cards-container">
      {cards}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes ={
  cards: PropTypes.arrayOf(PropTypes.object)
} 

export default Cards;