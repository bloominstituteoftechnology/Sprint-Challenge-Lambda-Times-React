import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card=>{
        return <Card {...card}/>
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default Cards;