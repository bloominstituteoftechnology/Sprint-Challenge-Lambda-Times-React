import React, { Component } from 'react';
import PropTypes from "prop-types";


const Card = props => {
  return (
    console.log(props.card),
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;

Card.propTypes = {
  card: PropTypes.object.isRequired}

