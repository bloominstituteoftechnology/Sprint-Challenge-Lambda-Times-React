import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cards.img} alt="dog" />
        </div>
        <span>By {props.cards.author}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  cards: PropTypes.string
}

export default Card;