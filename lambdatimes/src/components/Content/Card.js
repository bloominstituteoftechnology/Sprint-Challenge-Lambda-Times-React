import React from 'react';

const Card = props => {
  return (
    
    <div className="card">
      <div className="headline">{props.cardData.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardData.img} />
        </div>
        <span>By {props.cardData.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
