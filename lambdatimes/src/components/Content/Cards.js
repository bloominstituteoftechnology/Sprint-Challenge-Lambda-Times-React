import React from 'react';
import Card from './Card';

import propTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card, id) => <Card key={'card' + id} card={card}/>)
          }
          </div>
  )
}

Cards.propTypes = {
  cards: propTypes.arrayOf(propTypes.object)
}
// Make sure you include prop types for all of your incoming props

export default Cards;