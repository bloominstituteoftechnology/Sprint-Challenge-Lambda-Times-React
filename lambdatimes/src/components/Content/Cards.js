import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

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
Cards.propTypes = {
  Cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  })),
  selectedTab: PropTypes.string
}

export default Cards;