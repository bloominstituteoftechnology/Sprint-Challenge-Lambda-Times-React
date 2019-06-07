import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card =>{
        return(
          <Card card={card}/>
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
// Cards.PropTypes ={
//   cards: PropTypes.array
// }
export default Cards;