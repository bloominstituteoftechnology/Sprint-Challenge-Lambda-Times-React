import React from 'react';

import propTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={props.card.headline/* image source goes here */} />
        </div>
        <span>By {props.card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: propTypes.shape({
    headline: propTypes.string.isRequired,
    tab: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
  })
};
// Make sure to include PropTypes.

export default Card;
