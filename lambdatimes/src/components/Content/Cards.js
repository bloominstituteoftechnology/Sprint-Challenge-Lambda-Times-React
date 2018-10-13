import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  // console.log("cards props", props.cards);

  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card cards={card} key={card.headline} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};
export default Cards;
