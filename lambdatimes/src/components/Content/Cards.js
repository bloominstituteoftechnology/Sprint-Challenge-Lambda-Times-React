import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cardProps.map((element, index) => {
        return <Card key={index} cardProps={element} filterCards={props.filterCards} />
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cardProps: PropTypes.arrayOf(PropTypes.object)
}
export default Cards;