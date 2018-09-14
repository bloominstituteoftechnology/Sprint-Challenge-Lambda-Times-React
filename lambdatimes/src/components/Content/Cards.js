import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  console.log(props);
  return (
    <div className="cards-container">
        {props.cards.map(card => <Card card={card}/>)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
