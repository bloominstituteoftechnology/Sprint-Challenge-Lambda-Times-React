import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = (props) => {
  return (
    <div className="cards-container">
      {props.cards.map((card, id) => <Card cardData={card} key={id} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  card: PropTypes.array.isRequired
}

export default Cards;