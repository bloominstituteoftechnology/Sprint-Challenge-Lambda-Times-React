import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardProps.headline /* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardProps.img /* image source goes here */} alt=""/>
        </div>
        <span>By {props.cardProps.author /* author goes here */}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardProps: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}
//PropTypes Checking for this file cleared!


// Make sure to include PropTypes.

export default Card;
