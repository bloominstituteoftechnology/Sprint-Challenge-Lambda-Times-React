// libraries import
import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  // destructuring props for readability
  const {card} = {...props};
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt={card.headline}/>
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
})};

export default Card;
