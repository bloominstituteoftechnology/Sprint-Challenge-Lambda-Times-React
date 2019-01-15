import React from 'react';
import PropTypes from "prop-types";

const Card = props => {
  const {card} = props
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={'card.img' /* image source goes here */} />
        </div>
        <span>By {card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
