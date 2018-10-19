import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card =>
      <Card 
      card={card}
      name={card.tab}
      key={card.headline}
      />
    )}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>







)
}




  Cards.propTypes = {
      card: propTypes.shape({
      headline : propTypes.string,
      tab : propTypes.string

  })

  }


// Make sure you include prop types for all of your incoming props

export default Cards;