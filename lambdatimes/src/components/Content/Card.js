import React from 'react';
import propTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${props.cards.img}`} alt="author headshot"/>
        </div>
        <span>By {props.cards.author}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.
Card.propTypes = {
  headline: propTypes.string,
  img: propTypes.string,
  author: propTypes.string
}

export default Card;