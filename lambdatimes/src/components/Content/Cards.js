import React from 'react';
import Card from './Card';

const Cards = ({cards}) => {
  return (
    <div className="cards-container">
      {cards.map(({headline, img, author}, i) => <Card headline={headline} img={img} author={author} key={i}/>)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;