import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map (card =>
      <Card key ={Math.random()} card = {card} />
      )}          
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards : PropTypes.array,
}

export default Cards;