import React from "react";
import PropTypes from "prop-types";
import { CardStyled, Headline, Author, ImgContainer } from "../Content/Styled";

const Card = props => {
  return (
    <CardStyled>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <img alt="" src={props.card.img} />
        </ImgContainer>
        <span>By {props.card.author}</span>
      </Author>
    </CardStyled>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string
};

export default Card;
