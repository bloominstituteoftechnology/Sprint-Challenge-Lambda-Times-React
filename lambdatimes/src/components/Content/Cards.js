import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => {
        return <Card 
        headline = {card.headline}
        img = {card.img}
        author = {card.author}
        type = {card.tab}
        />
      })}
    </div>
  )
}

Cards.proptypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;