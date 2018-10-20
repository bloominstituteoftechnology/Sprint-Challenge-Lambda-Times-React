import React from 'react';
import { cardData } from '../../data';
import {CardStyle, Headline, Author, CardImgContainer} from '../StyledComponents';

const Card = props => {
  return (
    <CardStyle>

      <Headline>{props.card.headline}</Headline>

      <Author>

        <CardImgContainer>
          <img src={props.card.img} alt={props.card.author}/>
        </CardImgContainer>

        <span>By {props.card.author}</span>
      </Author>
    </CardStyle>
  );
};

export default Card;
