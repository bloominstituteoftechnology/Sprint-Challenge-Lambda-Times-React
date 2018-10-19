import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

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

Cards.propTypes = {
  cards: propTypes.array.isRequired
}

export default Cards;