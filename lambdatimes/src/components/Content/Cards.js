import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cards-container">
        {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        {this.props.cards.map(card => {
          return <Card card={card} />;
        })}
      </div>
    );
  }
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({card: PropTypes.string})
  )
}

export default Cards;
