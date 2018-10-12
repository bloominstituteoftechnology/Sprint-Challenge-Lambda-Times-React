import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map((item, idx)=>{
      return <Card key={idx} card={item} />
    })
        /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.propTypes ={
  cards: PropTypes.arrayOf(PropTypes.object)
}

// Make sure you include prop types for all of your incoming props

export default Cards;
