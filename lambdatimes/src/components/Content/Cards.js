import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {console.log('from Cards.js', props.cardsProps)}
      {props.cardsProps.map((element, index) => {
        return <Card key={index} cardProps={element}/>
      })} 
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.propTypes = {
  cardsProps: PropTypes.arrayOf(PropTypes.object)
}
//PropTypes Checking for this file cleared!


// Make sure you include prop types for all of your incoming props

export default Cards;