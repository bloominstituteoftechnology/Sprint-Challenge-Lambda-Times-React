import React from 'react';
import propType from 'prop-types';

const Card = props => {
  const { headline, img, author } = props.card;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propType = {
  card: propType.object.isRequired
};

export default Card;
