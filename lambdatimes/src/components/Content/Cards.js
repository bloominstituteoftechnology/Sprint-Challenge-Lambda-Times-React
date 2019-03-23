import React from 'react';
import PropTypes from 'prop-types';
import { CardsWrapper } from '../../styles/CardStyles';

import Card from './Card';

const Cards = props => {
  return (
    <CardsWrapper>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        {props.cards.map(card => (
          <Card key={card.headline} card={card}/>
        ))}
    </CardsWrapper>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}
export default Cards;