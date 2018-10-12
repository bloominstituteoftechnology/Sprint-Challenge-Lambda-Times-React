import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">
      <h2>{Card.headline}</h2>
      </div>
      <div className="author">
        <div className="img-container">
          <img src={Card.img}/>
        </div>
        <span>By {Card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
