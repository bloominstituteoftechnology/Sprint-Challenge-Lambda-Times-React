import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((a)=> <Card
        author={a.author}
        headline={a.headline}
        card={a}
        imgContainer={a.img}
        tab={a.tab}
       />
        )}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    author: PropTypes.string
  })
};

export default Cards;