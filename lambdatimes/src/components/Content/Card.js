import React from 'react';
import Prototypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img}/>
        </div>
        <span>By {props.author} {/* author goes here */}</span>
      </div>
    </div>
  );
};

Card.prototype={
  headline: Prototypes.string,
  img: Prototypes.string,
  author: Prototypes.string,
}

// Make sure to include PropTypes.

export default Card;
