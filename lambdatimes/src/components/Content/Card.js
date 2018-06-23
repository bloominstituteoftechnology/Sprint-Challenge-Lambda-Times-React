import React from 'react';
import PropTypes from 'prop-types';
import {CardBox, Headline, Author, ImgContainer} from '../../CSS/ReusableStyles';

// props: key={i} card={card}
const Card = props => {
  return (
    <CardBox>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <img src={props.card.img} />
        </ImgContainer>
        <span>By {props.card.author}</span>
      </Author>
    </CardBox>
  )
}

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}
export default Card;