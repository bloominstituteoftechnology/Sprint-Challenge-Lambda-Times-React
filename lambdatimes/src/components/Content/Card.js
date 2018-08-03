import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cards.img} alt="dog" />
        </div>
        <span>By {props.cards.author}</span>
      </div>
    </div>
  )
}


export default Card;