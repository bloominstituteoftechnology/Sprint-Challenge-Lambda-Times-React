import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} alt=''/>
        </div>
        <span>By {props.card.author}{/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.img,
}

export default Card;
