import React from 'react';
import Card from './Card';
import propTypes from 'prop-types';
import styled from 'styled-components'

const CardsContainers = styled.div`
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
`
const Cards = props => {
  return (
    <CardsContainers>
          {props.cards.map((card, index)   =>  <Card card={card} key={index}/>)}
    </CardsContainers>
  )
}

Cards.propTypes = {
  cards: propTypes.array.isRequired
}

export default Cards;