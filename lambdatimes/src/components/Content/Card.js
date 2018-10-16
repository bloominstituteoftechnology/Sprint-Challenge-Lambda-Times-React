import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  // console.log('card props', props);
  return (
    <div className="card">
      <div className="headline">{props.card.headline}{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} />
        </div>
        <span>By {props.card.author /* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};


export default Card;
