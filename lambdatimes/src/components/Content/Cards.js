import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/
      props.cards.map(item => (
        <Card card={item} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array
};
// Make sure you include prop types for all of your incoming props

export default Cards;
