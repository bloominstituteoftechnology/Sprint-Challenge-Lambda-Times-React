import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

const CardContainer = style.div`
  
`;

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

Card.propTypes = {
  card: PropTypes.object,
  headline: PropTypes.string,
  img: PropTypes.string
};

// Make sure to include PropTypes.

export default Card;