import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
        {props.cards.map((card, index) => {
          return <Card card={card} index= {index * 33} />          
          })
        }

    </div>
  )
}

export default Cards;