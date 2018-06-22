import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map(card => {
            return <Card key={Math.random()} card={card} />
          })}
    </div>
  )
}

Cards.propTypes = {
  cardsObject: PropTypes.shape({
    card: PropTypes.object
  })
}
export default Cards;
