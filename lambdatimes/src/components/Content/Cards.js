import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card key={props.headline} cards={card}/>)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.string
}

export default Cards;