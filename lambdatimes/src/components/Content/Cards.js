import React, { Component } from "react";
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
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    };
  }

  render() {
    return (
      <CardsContainer>
        {this.props.cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </CardsContainer>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;
