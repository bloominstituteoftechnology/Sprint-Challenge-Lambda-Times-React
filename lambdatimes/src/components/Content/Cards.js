import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  console.log(props);   // cool!, they are showing up

  return (
    <div className="cards-container">
      {props.cards.map( (card, i )=> {
        return <Card
          card = {card}
          key = {i}
        />
        }

      )}


      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </div>
  )
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array,
  card: PropTypes.object
};


export default Cards;
