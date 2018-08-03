import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
    {this.state.cards.map((c, i) => <Card key={i} card={c} />)}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({ headline: PropTypes.string, author: PropTypes.string })
  )
};

export default Cards;