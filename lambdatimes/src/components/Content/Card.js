import React from 'react';
import PropTypes from 'prop-types'


const Card = props => {

  const{headline, img, author} = props.card

  return (
    <div className="card">
      <div className="headline">{headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src = {img} /* image source goes here */ />
        </div>
        <span>By {author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
}

export default Card;
