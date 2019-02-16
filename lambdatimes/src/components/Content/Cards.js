import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import * as S from "../../CSS/styles";

const Cards = props => {
  return (
    <S.CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
      props.cards.map((item, index) => {
        return <Card cards={item} key={index} />;
      })}
    </S.CardsContainer>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      tab: PropTypes.string
    })
  )
};
export default Cards;
