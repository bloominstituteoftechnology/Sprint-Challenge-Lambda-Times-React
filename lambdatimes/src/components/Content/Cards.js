import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  const {img, headline, author} = props.card
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          <div className="headline">{headline}</div>
            <div className="author">
              <div className="img-container">
                <img src={img} alt=""/>
              </div>
              <span>By {author}</span>
            </div>
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Card.propTypes = {
  card: PropTypes.shape ({
    img: PropTypes.string,
    headline: PropTypes.string,
    author: PropTypes.string,
    tag: PropTypes.string
  })
}

export default Cards;