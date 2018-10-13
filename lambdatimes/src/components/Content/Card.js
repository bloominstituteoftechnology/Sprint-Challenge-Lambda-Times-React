import React from 'react';
import PropTypes from 'prop-types';
import {
  CardStyle,
  Headline,
  Author,
  ImgContainer
} from '../Styles/Card';

const Card = props => {
  return (
    <CardStyle>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <img src={props.card.img /* image source goes here */} alt={`${props.card.author} profile icon`} />
        </ImgContainer>
        <span>By {props.card.author}</span>
      </Author>
    </CardStyle>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.object
}

export default Card;
