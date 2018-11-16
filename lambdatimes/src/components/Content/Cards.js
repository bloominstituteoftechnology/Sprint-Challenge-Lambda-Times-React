import React from 'react';
import Card from './Card';

const Cards = props => {
  let cardsToDisplay
  if (props.selectedTab !== 'all'){
    cardsToDisplay = props.cards.filter(card => card.tab === props.selectedTab);
  } else {
    cardsToDisplay = props.cards;
  }
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
        
        cardsToDisplay.map(card => {
          return <Card key={card.headline} card={card}/>
        })
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;