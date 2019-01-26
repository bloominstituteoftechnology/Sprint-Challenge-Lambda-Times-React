import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.data.img} />
        </div>
        <span>By {props.data.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};

export default Card;
