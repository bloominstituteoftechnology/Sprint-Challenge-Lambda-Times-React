import React, { Component } from 'react';
import Card from './Card';

/*
  Received as props from Content.js

  cards={this.filterCards()}
*/

const Cards = props => {
  return (
    <div className="cards-container">

      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}

      {props.cards.map( (c, i) => <Card key={i} card={c} /> )}

    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
