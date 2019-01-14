import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} />
        </div>
        <span>By {props.card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.Proptypes = {
  card: PropTypes.shape({
    card: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  
})


}

export default Card;