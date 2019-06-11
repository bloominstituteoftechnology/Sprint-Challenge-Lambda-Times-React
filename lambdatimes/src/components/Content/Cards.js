import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data";

const Cards = props => {
  return (
    console.log(props.cards),
    (
      <div className="cards-container">
        {props.cards.map(card => {
          return <Card card={card} key={Math.random()} />;
        })}
        {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      </div>
    )
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
};
