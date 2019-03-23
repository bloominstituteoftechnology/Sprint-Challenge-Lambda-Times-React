import React from 'react';
import Card from './Card';
import propTypes from 'prop-types';

const Cards = props => {
    return (
        <div className="cards-container">
            {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
            {props.cards.map(cards => (
                <Card key={cards.headline} cards={cards} />
            ))}
        </div>
    );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
    card: propTypes.arrayOf(propTypes.object)
};

export default Cards;
