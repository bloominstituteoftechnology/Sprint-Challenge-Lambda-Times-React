import React from 'react';
// import React, {{ Component }} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  console.log(props)
  return (
    <div className="cards-container">
      {props.cards.map( card => {
        return <Card key={card.headline} card={card}/>
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array,
}

export default Cards;
