import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import CardsContainer from '../Styles/Cards'

const Cards = props => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => (
        <div key={Math.random() * 100000}>
          <Card card={card} />
        </div>
      ))}    
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}
export default Cards;