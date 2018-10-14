import React from 'react';
import PropTypes from "prop-types"

const Card = (props) => {
  return (
    <div className="card">
      <div className="headline">
      <h2>{props.headline}</h2>
      </div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt="post image"/>
        </div>
        <span>By {props.author/* author goes here */}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
	headline: PropTypes.string,
	author: PropTypes.string,
  img: PropTypes.string
}
// Make sure to include PropTypes.

export default Card;
