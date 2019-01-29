import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
     {props.cards.map(item => <Card card={item}/>)}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Card.propTypes = {
  card: propTypes.object.isRequired
}
// Make sure you include prop types for all of your incoming props

export default Cards;