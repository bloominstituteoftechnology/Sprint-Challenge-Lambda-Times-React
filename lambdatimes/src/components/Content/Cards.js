import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card =>
        <Card
          key={card.headline}
          card={card}
        />
      )}
    </div>
  )
}

Cards.propTypes ={
  card:PropTypes.arrayOf(PropTypes.object)
}

export default Cards;
