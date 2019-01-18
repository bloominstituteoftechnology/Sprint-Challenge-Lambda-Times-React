import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

import { CardsContainer } from './CardStyles';

const Cards = props => {
  return (
    <CardsContainer className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((e, i) => {
        return (
          <Card card={e} key={i} />
        )
      }) }
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propType = {
  cards: PropTypes.array
}
export default Cards;