import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Cards = props => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => <Card card={card}/>)}
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
    Cards: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string

  })
};

export default Cards;

