import React from 'react'
// import PropTypes from './../../../node_modules/prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.Card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.Card.img} />
        </div>
        <span>By{props.Card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.


export default Card;

// Card.PropTypes = {
//   author: PropTypes.string,
//   headline: PropTypes.string,
// }