import React from 'react';
import PropTypes from 'prop-types';

import { Cards, Headline, Author, ImageContainer } from './CardStyles';

const Card = props => {
  return (
    <Cards>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImageContainer>
          <img src={props.card.img} alt={props.card.headline}/>
        </ImageContainer>
        <span>By {props.card.author}</span>
      </Author>
    </Cards>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
