import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((singularCard) => {
        return (
          <Card headline={singularCard.headline} cardImg={singularCard.img} alt='card-img' author={singularCard.author} />
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default Cards;