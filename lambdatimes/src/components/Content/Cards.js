import React from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card key={props.headline} cards={card}/>)}
    </div>
  )
}



export default Cards;