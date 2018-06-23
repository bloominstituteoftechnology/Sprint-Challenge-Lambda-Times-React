import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, i) => {
        return <Card key = {i}card={card} />
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;