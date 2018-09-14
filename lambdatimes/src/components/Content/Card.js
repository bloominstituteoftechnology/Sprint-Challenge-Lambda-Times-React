import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardProps.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardProps.img} />
        </div>
        <span>By {props.cardProps.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  cardProps: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
}
export default Card;
