import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card card={card} key={card.headline} />
      )} 
    </div>
        
    
  );
};

export default Cards;

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card: PropTypes.arrayOf(
   
  )
};