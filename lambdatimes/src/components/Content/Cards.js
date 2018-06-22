import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((c, i) => <Card key={i} cardData={c} />)}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Cards;
