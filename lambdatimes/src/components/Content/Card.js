import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { headline, img, author } = props.card
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt="Douge" />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.PropTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
