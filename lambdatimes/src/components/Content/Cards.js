// libraries impor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components import
import Card from './Card';

const Cards = props => {
  // destructuring props for readability
  const {cards} = {...props};
  return (
    <div className="cards-container">
      {
        // map over the tabs
        cards.map((card, i) => (
          <Card key={i} card={card} />
        ))
      }
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
}

export default Cards;