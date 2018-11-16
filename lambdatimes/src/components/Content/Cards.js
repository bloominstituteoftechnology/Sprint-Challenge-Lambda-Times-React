// Importing libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

// Importing component
import Card from './Card';

// Styled Component
const CardContainerComp = styled.div`
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
  // destructuring props for readability
  const {cards} = {...props};
  return (
    <CardContainerComp className="cards-container">
      {
        // map over the tabs
        cards.map((card, i) => (
          <Card key={i} card={card} />
        ))
      }
    </CardContainerComp>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
}

export default Cards;