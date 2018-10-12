import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* DONE: Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card,i) => <Card key={i} card={card} />)}
    </div>
  )
}

// DONE: Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;