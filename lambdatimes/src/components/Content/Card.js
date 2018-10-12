import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={ /* image source goes here */props.cards.img} />
        </div>
        <span>By {/* author goes here */props.cards.author}</span>
      </div>
    </div>
  );
};
Card.propTypes = {
  cards:PropTypes.shape({
    author:PropTypes.string,
    headline:PropTypes.string,
    img:PropTypes.string,
  })
}
// Make sure to include PropTypes.

export default Card;
