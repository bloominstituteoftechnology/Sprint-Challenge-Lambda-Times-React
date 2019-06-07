import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => {
        return <div><Card card={card} /></div>
        })}
    </div>
  )
}

Cards.propTypes = {
    Cards: PropTypes.arrayOf(PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired 
    })),
    
  }
  



// Make sure you include prop types for all of your incoming props

export default Cards;