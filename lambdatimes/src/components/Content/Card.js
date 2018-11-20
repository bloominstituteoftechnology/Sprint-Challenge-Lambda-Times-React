import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.propsinCard.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.propsinCard.img} />
        </div>
        <span>By {props.propsinCard.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  propsinCard: PropTypes.array.isRequired
}

export default Card;