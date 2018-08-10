import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(c =>
        <Card
          headline={c.headline}
          tab={c.tab}
          img={c.img}
          author={c.author}
          card={c}
        />)}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;