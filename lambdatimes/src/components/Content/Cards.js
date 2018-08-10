import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card card={card} key={card.headline} />
      )} 
    </div>
        
    
  );
};

export default Cards;



Cards.propTypes = {
  card: PropTypes.array
};