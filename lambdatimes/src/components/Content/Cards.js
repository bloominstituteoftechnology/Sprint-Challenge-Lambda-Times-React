import React, { Component } from 'react';
import Card from './Card';
import PropType from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((c, i) => <Card key={i} 
      headline={c.headline} 
      tab={c.tab} 
      img={c.img} 
      author={c.author} 
      />)}    
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propType ={
  card: PropType.arrayOf(PropType.shape({
    headline: PropType.string,
    tab: PropType.string,
    img: PropType.string,
    author: PropType.string
  }))
}

export default Cards;