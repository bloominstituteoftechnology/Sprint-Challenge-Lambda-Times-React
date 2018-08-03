import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainer = styled.div`
  width: 1200px;
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
      {props.cards.map((element,i) => <Card key={i} card={element}/>)}
    </CardsContainer>
  )
}

Cards.proptypes = {
  cards: PropTypes.array
}

export default Cards;