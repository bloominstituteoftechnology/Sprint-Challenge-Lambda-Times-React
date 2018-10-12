import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cardscontainerdiv = styled.div `

`;


const Cards = props => {
  console.log("In Cards component : " ,props);
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card, index) => (
              <Card 
                  key = {index}
                  cardToDisplay = {card}
              />
          ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards :  PropTypes.shape({
            author : PropTypes.string,
            headline : PropTypes.string,
            img : PropTypes.string,
            tab : PropTypes.string,
  })
};

export default Cards;