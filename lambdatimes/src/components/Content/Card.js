import React from 'react';
import PropTypes from 'prop-types';
import { cardData } from '../../data';

const Card = props => {
  // const theCard = this.props;
  // const cardArray = theCard.map( card, i)
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

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
}

export default Card;
