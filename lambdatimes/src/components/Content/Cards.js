import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map(card => <Card card={card} key={card.headline} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}
export default Cards;