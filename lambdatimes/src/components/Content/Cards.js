import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};
export default Cards;
