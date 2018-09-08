import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card key={card.headline} card={card} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
// Cards.propTypes = {
//   cardData: PropTypes.shape ({
//     headline: PropTypes.string,
//     tab: PropTypes.string,
//     image: PropTypes.string,
//     author: PropTypes.string
//   })
// };

export default Cards;

Card.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
})).isRequired
}
