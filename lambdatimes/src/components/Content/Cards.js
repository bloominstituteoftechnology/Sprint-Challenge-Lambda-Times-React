
import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card, index ) => {
            {/* console.log("this is card data", props.cardData); */}
            return <Card key={index} cardData={card}/>
            }
          )}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Cards;