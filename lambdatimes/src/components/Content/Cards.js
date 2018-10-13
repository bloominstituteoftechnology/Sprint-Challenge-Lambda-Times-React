import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) =>
        <div className='cardsContiner' key={index}>
          <Card card={card} />
        </div>
      )}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    imp: PropTypes.string,
    tab: PropTypes.string
    })
  )
}


export default Cards;