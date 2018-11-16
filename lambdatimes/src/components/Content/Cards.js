import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map(item => {
        return <Card card={item} key={item.headline} />;
      })}
    </CardsContainer>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
};
