import React from 'react';
import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.imageUrl /* image source goes here */} />
        </div>
        <span>By {/* author goes here */props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // img: PropTypes.img.isRequired
  }).isRequired
};

export default Card;
