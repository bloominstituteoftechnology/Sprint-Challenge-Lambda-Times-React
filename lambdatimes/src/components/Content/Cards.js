import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";


const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props I KNOW MOM STOP TELLING ME

Cards.propTypes = {
  card: PropTypes.objectOf({
    author: PropTypes.string,
  })
//WHY DOES OBJECTOF WORK BUT NOT ARRAYOF. WHATTTTTT?????
}


export default Cards;

{
  /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
}
