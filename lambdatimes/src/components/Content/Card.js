import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline"><h4>{props.card.headline}</h4></div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="author"/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.
Card.propTypes ={
  // card: PropTypes.object.isRequired,
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string,
    author: PropTypes.string
  })
}
export default Card;