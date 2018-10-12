import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card}) => {
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt={card.author} />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.string.isRequired)
}

export default Card;
