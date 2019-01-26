import React, { Component } from 'react';
import Card from './Card';
import { cardData } from '../../data';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card) => {
            <Card 
            headline = {card.headline}
            imgSrc = {card.img}
            author = {card.author}
            key = {card.headline}
            />

          })}
    </div>
  )
}
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline:PropTypes.string,
      tab:PropTypes.string,
      img:PropTypes.string,
      author:PropTypes.string
    })
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;