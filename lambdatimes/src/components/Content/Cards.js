import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((item) => {
                return <Card card={item} />
        })}
    </div>
  )
}

Cards.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
}

export default Cards;