import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = ({cards}) => {
  return (
    <div className="cards-container">
      {cards.map(card => <Card card={card} key={card.headline} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Cards;