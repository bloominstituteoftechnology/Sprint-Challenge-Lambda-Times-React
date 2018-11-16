import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Children Component(s)
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

          {props.cards.map(c => (<Card card={c} />))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
// PropTypes
Cards.propTypes = {
  cards: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.striing,
    tab: PropTypes.string
  })
}

export default Cards;