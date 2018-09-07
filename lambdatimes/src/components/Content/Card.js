import React from 'react';
import { cardData } from '../../data';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card">
      <div className="headline">
        {props.card.headline /* headline goes here */}
      </div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} />
        </div>
        <span>By {props.card.author /* author goes here */}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
  }),
};

// Make sure to include PropTypes.

export default Card;
