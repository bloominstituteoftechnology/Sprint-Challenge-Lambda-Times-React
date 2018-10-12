import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card}) => {
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt='author'/>
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  }).isRequired
}

export default Card;
