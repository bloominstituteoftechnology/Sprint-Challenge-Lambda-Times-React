import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
	  display: flex;
	  justify-content: space-evenly;
	  align-items: none;
	  flex-direction: row;
	  width: 100%;
	  margin-top: 16px;
	  flex-wrap: wrap;
	  z-index: 1;
	  max-width: 1200px;
	`;

const Cards = props => {
  return (
    <CardContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => <Card key={card.headline} data={card}/>)}
	    </CardContainer>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Cards;