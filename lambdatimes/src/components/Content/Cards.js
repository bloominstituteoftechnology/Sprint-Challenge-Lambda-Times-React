import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card headline={card.headline} author={card.author} img={card.img}/>)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
}
// Make sure you include prop types for all of your incoming props

export default Cards;