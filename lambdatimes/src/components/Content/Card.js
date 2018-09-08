import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {

  const {
    headline,
    img,
    author,
  } = props.card;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt={author} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

// Card.propTypes = {
//   cardData: PropTypes.shape ({
//     headline: PropTypes.string,
//     tab: PropTypes.string,
//     image: PropTypes.string,
//     author: PropTypes.string
//   })
// }

export default Card;

Card.propTypes = {
  cards: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
}).isRequired
}