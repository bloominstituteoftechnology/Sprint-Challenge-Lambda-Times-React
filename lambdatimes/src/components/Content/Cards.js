import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((element,i) => <Card key={i} card={element}/>)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.proptypes = {
  cards: PropTypes.array
}

export default Cards;