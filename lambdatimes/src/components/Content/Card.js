import React from 'react';

const Card = props => {

  let card = props.card
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${props.card.img}`} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.

export default Card;