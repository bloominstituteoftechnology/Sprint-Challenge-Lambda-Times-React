import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from "styled-components";

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const DivCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const Cards = props => {
  let cardsToDisplay
  if (props.selectedTab !== 'all'){
    cardsToDisplay = props.cards.filter(card => card.tab === props.selectedTab);
  } else {
    cardsToDisplay = props.cards;
  }
  return (
    <DivCardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
        
        cardsToDisplay.map(card => {
          return <Card key={card.headline} card={card}/>
        })
      }
    </DivCardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  Cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  })),
  selectedTab: PropTypes.string
}

export default Cards;