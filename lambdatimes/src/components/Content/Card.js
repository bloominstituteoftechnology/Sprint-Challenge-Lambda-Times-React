import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const {
    headline, // save as const headline = props.card.headline
    img,
    author,
  } = props.card;

  return (
    <div className="card">
      <div className="headline">{/* headline goes here */ headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img /* image source goes here */} className='card-img' alt='card image'/>
        </div>
        <span>By {/* author goes here */ author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card;
