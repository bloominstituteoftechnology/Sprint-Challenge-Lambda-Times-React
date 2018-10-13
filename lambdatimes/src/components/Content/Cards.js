import React, { Component } from 'react';
import Card from './Card';
import { tabData, cardData } from '../../data';

const Cards = props => {
  return (
    <div className="cards-container">
    {cardData.map((cards, index) => {
        return <Card key={index} img={cards.img} tab={cards.tab} author={cards.author} headline={cards.headline} />
     } ) }
     
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;