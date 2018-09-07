import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      <div>
        {props.cards.map((card, index) => {
          return (
            <div key={index}>
              <Card
                card={card}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;