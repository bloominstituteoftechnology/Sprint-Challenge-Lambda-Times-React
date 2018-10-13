import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Mapping over the list creating a new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, index) => <Card card={card} key={index}/>)}
    </div>
  )
}

Cards.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;