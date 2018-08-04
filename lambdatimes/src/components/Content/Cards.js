import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(c => <Card key={c} card={c} 
          headline={c.headline}
          img={c.img}
          author={c.author}
          /> )}
    </div>
  )
}

Cards.proptypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

// Make sure you include prop types for all of your incoming props

export default Cards;