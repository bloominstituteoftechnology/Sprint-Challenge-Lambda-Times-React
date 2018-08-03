import React, { Component } from "react";
import Card from "./Card";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((cardInfo, index) => {
        return (
          <div key={index}>
            <div className="card">
              <div className="headline">{cardInfo.headline}</div>
              <div className="author">
                <div className="img-container">
                  <img src={cardInfo.img} alt="dogs"/* image source goes here */ />
                </div>
                <span>By {cardInfo.author}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
