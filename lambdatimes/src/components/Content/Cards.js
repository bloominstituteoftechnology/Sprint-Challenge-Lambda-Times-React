import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card) => <Card key={card.headline} card={card}/>)}
    </div>
  )
}


Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}
// Make sure you include prop types for all of your incoming props

export default Cards;