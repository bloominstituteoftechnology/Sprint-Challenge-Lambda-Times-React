import React, { Component } from 'react';



const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headliine}</div>
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

// Cards.propTypes={
//   props: propTypes.arrayOf(PropTypes.shape({
 // headline: propTypes.string.isRequired
  // tab: propTypes.string.isRequired
  // img: propTypes.string.isRequired
  // author: propTypes.string.isRequired
// }))
// }

