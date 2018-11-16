import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';



const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img alt='The Author' src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string,
  })
}

export default Card;
