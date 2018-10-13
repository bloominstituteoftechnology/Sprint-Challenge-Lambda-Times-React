import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'


const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card=>{
        return(
        <Card key={card.headline} card={card}/>
      )})}
    </div>
  )
}


export default Cards;