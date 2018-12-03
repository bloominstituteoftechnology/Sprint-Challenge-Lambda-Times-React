import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((cards, i) => {
      return(
        <Card cards={cards}/>
      )
      }
      )}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;