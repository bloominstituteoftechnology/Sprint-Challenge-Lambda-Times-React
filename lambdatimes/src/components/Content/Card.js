import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styleComponents.js';

const Card = props => {
  return (
    <styles.Card>
      <styles.Headline>{props.card.headline}{/* headline goes here */}</styles.Headline>
      <styles.Author>
        <styles.ImgContainer>
          <img src={props.card.img /* image source goes here */} alt="Author Profile" />
        </styles.ImgContainer>
        <span>By {props.card.author/* author goes here */}</span>
      </styles.Author>
    </styles.Card>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

export default Card;
