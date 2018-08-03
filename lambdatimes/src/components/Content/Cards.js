import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      { props.cards.map(card => {
        return (
          <Card 
            headline={card.headline}
            tab={card.tab}
            img={card.img}
            author={card.author}
          />
        )})
      }
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline:PropTypes.string.isRequired,
      tab:PropTypes.string.isRequired,
      img:PropTypes.string.isRequired,
      author:PropTypes.string.isRequired
    })
  ).isRequired
}

export default Cards;