import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card =>
        <Card
          key={props.target}
          card={card}
        />
      )}
    </div>
  )
}

Cards.propTypes ={
  cards:PropTypes.arrayOf(PropTypes.string)
}

export default Cards;
