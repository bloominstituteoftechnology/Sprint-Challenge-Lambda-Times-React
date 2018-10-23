import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import { CardsContainer } from "../Content/Styled";

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map(card => (
        <Card card={card} key={card.headline} />
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.image,
      author: PropTypes.string
    })
  )
};

export default Cards;
