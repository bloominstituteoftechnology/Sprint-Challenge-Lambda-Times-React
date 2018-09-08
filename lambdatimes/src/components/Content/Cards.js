import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  console.log(props.filteredCards);
  return (
    <div className="cards-container">
      <div>
        {props.filteredCards.map((card, index) => {
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