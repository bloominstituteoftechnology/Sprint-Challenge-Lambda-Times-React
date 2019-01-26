import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.data.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.data.img} />
        </div>
        <span>By {props.data.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.PropTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  }),
};

export default Card;