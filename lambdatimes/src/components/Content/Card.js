import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.data.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.data.img} />
        </div>
        <span>By {props.data.author}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.

export default Card;
