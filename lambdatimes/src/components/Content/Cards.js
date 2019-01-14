import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map( (card, index) => {
        return <Card  key={index} card={card} />
      })}

      {}
    </div>
  )
}



Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    auther: PropTypes.string,
  }),)
}

export default Cards;
