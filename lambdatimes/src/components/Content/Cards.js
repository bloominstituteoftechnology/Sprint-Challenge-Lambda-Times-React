import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  console.log("CARDS PLURAL PROPS", props);

  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, i) => {
        return (
          <Card
            key={i}
            headline={card.headline}
            author={card.author}
            img={card.img}
          />
        );
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: (PropTypes.array.shape = {
    headline: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string
  })
};

export default Cards;
