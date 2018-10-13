import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  // console.log(props);
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, i) => {
        return (
          <Card
            key={i}
            tab={props.tab}
            author={props.author}
            img={props.img}
            headline={props.headline}
          />
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
