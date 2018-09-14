import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card,index) => <Card key={index} card={card} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propsTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })) 
 
}

export default Cards;