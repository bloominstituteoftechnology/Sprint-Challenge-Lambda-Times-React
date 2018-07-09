import React, { Component } from "react";
import Card from `./Card`;


export default class Card extends Component {
  render() {
    const { card } = this.props.card;
    return (
      <div className="cards-container">
        {cards.map((article, i) => {
          return <Card article={article} key={i} />;
        })}
      </div>
    );
  }
}


// Make sure you include prop types for all of your incoming props

export default Cards;