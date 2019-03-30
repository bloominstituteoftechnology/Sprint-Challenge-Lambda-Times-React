import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
// import styled from 'styled-components';



const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => <Card card={card} key={`${index * 100}`} />)}

      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.array,
};


export default Cards;