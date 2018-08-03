import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card key = {card.headline} card = {card} />)}
    </div>
  )
}

Card.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  headline: PropTypes.string,
  card: PropTypes.object //might not be needed
}

export default Cards;
