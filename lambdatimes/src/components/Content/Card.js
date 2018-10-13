import React from 'react';
import Proptypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.prototype = {
  card: Proptypes.shape({
    headline: Proptypes.string,
    img: Proptypes.string,
    author: Proptypes.string,
  })
}
export default Card;
