import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.filterCards.map((element, index) => {
        return <Card key={index} cardProps={element} />
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  filterCards: PropTypes.arrayOf(PropTypes.object.isRequired)
}
export default Cards;