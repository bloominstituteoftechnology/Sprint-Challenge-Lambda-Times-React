import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  console.log('headline');
  console.log(typeof props.card.headline);
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='author headshot' />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

// Make sure to include PropTypes.

export default Card;
