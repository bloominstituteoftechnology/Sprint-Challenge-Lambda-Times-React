import React from 'react';
import PropTypes from 'prop-types'

const Card = ({card}) => {
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img /* image source goes here */} alt="card"/>
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.Proptypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
