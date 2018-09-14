import React from 'react';
import propTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={props.card.headline}/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: propTypes.shape({
    headline: propTypes.string.isRequired,
    tab: propTypes.string.isRequired,
    
  }
  )
}
// Make sure to include PropTypes.

export default Card;
