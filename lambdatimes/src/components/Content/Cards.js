import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

`





const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map(card =>
      (<Card card={card} key={card.headline}/>))}
    
    
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}



// Make sure you include prop types for all of your incoming props

export default Cards;


//props.cards is this.filtercards() from content