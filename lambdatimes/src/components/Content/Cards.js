import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import {CardsContainer} from '../../CSS/ReusableStyles';

// props: cards={this.filterCards()}
const Cards = props => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, i) => {
        return (
          <Card key={i} card={card}/>
        );
      } )}
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array
}

export default Cards;