import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.props.img} />
        </div>
        <span>By {props.props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
