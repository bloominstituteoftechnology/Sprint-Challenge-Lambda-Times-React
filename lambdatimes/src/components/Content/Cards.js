import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map(card => <Card key={card.headline} card={card} tab={card.tab} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;