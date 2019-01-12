import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardHeadline, CardAuthor, CardImg } from '../../styles/CardStyles';

const Card = props => {
  return (
    <CardWrapper>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor>
        <CardImg>
          <img src={props.card.img} alt="user icon"/>
        </CardImg>
        <span>By {props.card.author}</span>
      </CardAuthor>
    </CardWrapper>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
}

export default Card;
