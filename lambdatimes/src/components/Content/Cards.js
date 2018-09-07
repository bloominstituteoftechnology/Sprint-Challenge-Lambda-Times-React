import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1280px;
  }
`;



const Cards = props => {
  return (
    <CardsContainerDiv>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => { // im an array
        return <Card 
          card={card}                    
          // might need a key id, look into which data we can use
        />
      })}
    </CardsContainerDiv>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      author: PropTypes.string,
      imgSrc: PropTypes.string
    })
  )
}

export default Cards;