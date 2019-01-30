import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map( (tab, index) => { 
        return <Card key={index} card={tab}/>
      })}
    </div>
  )
}


// Make sure you include prop types for all of your incoming props
Cards.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    auther: PropTypes.string,
  }),)
}

export default Cards;