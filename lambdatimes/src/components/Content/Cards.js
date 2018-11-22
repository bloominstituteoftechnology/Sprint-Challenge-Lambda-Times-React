import React from 'react';
// , { Component } 
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map( (propsinCards) => (
          <Card
          key ={propsinCards.headline}
          propsinCard = {propsinCards}
          />
        ))}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props



Cards.propTypes = {
  cards: PropTypes.array.isRequired
}
export default Cards;