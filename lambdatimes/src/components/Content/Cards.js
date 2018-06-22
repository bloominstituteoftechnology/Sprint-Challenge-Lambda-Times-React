import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'


const Cards = props => {
  let cardElems = props.cards.map( (card) => <Card card={card} key={card.headline} />)
  return (
    <div className="cards-container">
      {cardElems}
    </div>
  )
}

Cards.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }),
};

export default Cards;