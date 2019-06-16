import React, { Component } from 'react';
import Card from './Card';

import Prototypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((x) =>(
        <Card headline={x.headline} img={x.img} author={x.author}/>
      ))}
        
        
        {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.prototype={
  cards:Prototypes.array
}

// Make sure you include prop types for all of your incoming props

export default Cards;