import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">

              {props.cards.map((cardItem, index) => <Card key={`${Math.random()}${index}`}  card={cardItem} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;