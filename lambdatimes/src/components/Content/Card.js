import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={""} />
        </div>
        <span>By {props.card.author}</span>
        <span>Topic: {props.card.tab}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.
Card.propTypes = {
  author: PropTypes.string,
  headline: PropTypes.string,
  img: PropTypes.string,
  tab: PropTypes.string,
}

export default Card;
