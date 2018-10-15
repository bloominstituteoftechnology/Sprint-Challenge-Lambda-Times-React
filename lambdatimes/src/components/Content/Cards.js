import React, { Component } from 'react';
import Card from './Card';
import propTypes from './../../../node_modules/prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card) => {
          return(
                <div>
                <Card Card={card} />
                </div>
          )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  author: propTypes.string,
  headline: propTypes.string,
  img: propTypes.string,
  tab: propTypes.string,  
}


export default Cards;