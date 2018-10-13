import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map((card, index)   =>  <Card card={card} key={index}/>)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;