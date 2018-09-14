import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styled from "styled-components";

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map(card => (
        <Card key={card.headline} card={card} />
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
    }
  }
`;

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;
