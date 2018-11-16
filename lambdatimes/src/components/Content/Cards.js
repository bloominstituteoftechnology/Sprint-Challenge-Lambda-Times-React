import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Children Component(s)
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">

          {props.cards.map(c => (<Card card={c} />))}
          
    </div>
  )
}

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