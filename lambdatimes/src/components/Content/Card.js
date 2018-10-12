import React from 'react';
import propTypes from 'prop-types';
import { CardDiv, CardHeadline, CardAuthor, CardImg, CardImage, CardAuthorSpan } from '../../Styles';

const Card = props => {
  return (
    <CardDiv>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor>
        <CardImg>
          <CardImage src={props.card.img} alt="card" />
        </CardImg>
        <CardAuthorSpan>By {props.card.author}</CardAuthorSpan>
      </CardAuthor>
    </CardDiv>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: propTypes.string,
  img: propTypes.string,
  author: propTypes.string
}

export default Card;
