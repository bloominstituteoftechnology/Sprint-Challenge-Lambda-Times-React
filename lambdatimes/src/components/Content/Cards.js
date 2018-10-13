import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
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
          {props.cards.map((card)   =>  <Card card={card}/>)}
    </CardsContainers>
  )
}

Cards.PropTypes = {
  cards: PropTypes.func.isRequired
}

export default Cards;