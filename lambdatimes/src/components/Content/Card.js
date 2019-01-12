import React from 'react';

/*
Passed as props from Cards.js

  key={i}
  card={c}

*/

const Card = props => {
  console.log(props)
  return (
    <div className="card">

      <div className="headline">{props.card.headline}</div>
      <div className="author">

        <div className="img-container">
          <img src={props.card.img} />
        </div>

        <span>By {props.card.author}</span>

      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
