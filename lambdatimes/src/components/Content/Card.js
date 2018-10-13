import React from 'react';

const Card = props => {
  // console.log('card props', props);
  return (
    <div className="card">
      <div className="headline">{props.headline}{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img /* image source goes here */} />
        </div>
        <span>By {props.author} {/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
