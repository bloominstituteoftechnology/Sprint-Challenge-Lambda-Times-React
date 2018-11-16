import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CardsContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  ${props =>
    props.mediaBreak &&
    css`
      min-width: 1200px;
      width: 1200px;
    `};
`;

const Cards = props => {
  return (
    <CardsContainerDiv mediaBreak>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

          {props.cards.map((card, index) => {
            return <Card card={card} key={index}/>
          })}

    </CardsContainerDiv>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    img: PropTypes.string,
    headline: PropTypes.string,
    tab: PropTypes.string,
  })),
}

export default Cards;