import React from 'react';
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
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = props => {
  
  return (
    <CardsContainer className="cards-container">
          {
            props.cards.map((el)=>{
              return <Card key={el.headline} card={el}/>
            })
          }
    </CardsContainer>
  )
}

Cards.propTypes = {
  cards: PropTypes.array,
  headline: PropTypes.string,
}

export default Cards;