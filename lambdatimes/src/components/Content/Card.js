import React from "react";
import PropTypes from "prop-types";
import * as S from "../../CSS/styles";

const Card = props => {
  return (
    <S.CardsContainerCard>
      <S.CardsContainerCardHeadline>
        {/* headline goes here */ props.cards.headline}
      </S.CardsContainerCardHeadline>
      <S.CardsContainerCardAuthor>
        <S.CardsContainerCardAuthorImgContainer>
          <S.CardsContainerCardAuthorImg
            src={/* image source goes here */ props.cards.img}
          />
        </S.CardsContainerCardAuthorImgContainer>
        <S.CardsContainerCardAuthorSpan>
          By {/* author goes here */ props.cards.author}
        </S.CardsContainerCardAuthorSpan>
      </S.CardsContainerCardAuthor>
    </S.CardsContainerCard>
  );
};
Card.propTypes = {
  cards: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string
  })
};
// Make sure to include PropTypes.

export default Card;
