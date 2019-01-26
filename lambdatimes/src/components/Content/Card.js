import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={'' /* image source goes here */} />
        </div>
        <span>By {/* author goes here */}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.object,
  author: PropTypes.object
};

export default Card;
