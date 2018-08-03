import React from 'react';
// import React, {{ Component }} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  console.log(props)
  return (
    <div className="cards-container">
      {props.cards.map( card => {
        return <Card key={card.headline} card={card}/>
      })
        /* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array,
}
// Make sure you include prop types for all of your incoming props --later yo

export default Cards;
