import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.person.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.person.img} />
        </div>
        <span>By {props.person.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
