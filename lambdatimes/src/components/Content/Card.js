import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardProps.headline /* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardProps.img /* image source goes here */}/>
        </div>
        <span>By {props.cardProps.author /* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
