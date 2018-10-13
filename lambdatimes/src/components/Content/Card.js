import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img /* image source goes here */} alt="card-img"/>
        </div>
        <span>By {props.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

export default Card;
