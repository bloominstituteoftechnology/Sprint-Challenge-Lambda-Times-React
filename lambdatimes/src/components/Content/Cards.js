import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {
        props.cards.map(element => {
          return (<Card card={element}/>)
        })
      }
    </div>
  )
}

Cards.propTypes = {
  cards:PropTypes.array
}

export default Cards;