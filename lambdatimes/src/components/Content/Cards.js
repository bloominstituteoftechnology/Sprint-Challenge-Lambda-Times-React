import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((event, index) => (<Card key={index} card={event}/>))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = PropTypes.array.isRequired

export default Cards;