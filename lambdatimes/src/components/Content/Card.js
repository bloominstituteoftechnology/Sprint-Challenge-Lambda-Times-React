import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${props.img}`} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline: PropTypes.string.isRequired,
  img:PropTypes.object.isRequired,
  author:PropTypes.object.isRequired
}
export default Card;
