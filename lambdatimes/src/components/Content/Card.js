import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.props.img} />
        </div>
        <span>By {props.props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
}

export default Card;
