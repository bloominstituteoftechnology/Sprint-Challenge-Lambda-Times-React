import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import {CardsContainer} from '../StyledComponents';

const Cards = props => {
  return(
    <CardsContainer>
      {props.cards.map(item=><Card card={item} key={item.headline}/>)}
    </CardsContainer>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string,
    })
  )
}

export default Cards;