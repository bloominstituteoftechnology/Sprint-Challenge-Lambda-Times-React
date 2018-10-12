import React from 'react';
import Card from './Card';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
`

const Cards = props => {
  return (
    <StyledCardsContainer>
      {props.cards.map(card => <Card card={card}/>)};
    </StyledCardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
}

export default Cards;