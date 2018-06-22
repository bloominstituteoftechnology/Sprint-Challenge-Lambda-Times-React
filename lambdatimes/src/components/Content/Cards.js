import React, { Component } from 'react';
import Card from './Card';
import { cardData } from '../../data';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cardData.map(cards => {
            return <div key={Date.now()}></div>
          })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;