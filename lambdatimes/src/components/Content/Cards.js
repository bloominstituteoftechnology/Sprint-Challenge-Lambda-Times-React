import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  console.log(props)
  return (
    <div className="cards-container">
      { props.cards.map(item => {
        return <Card card={item} img={item.img} author={item.author} tab={item.tab} headline={item.headline} key={item.headline} />; 
         })
        /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}
Cards.propTypes = {
  Cards: PropTypes.array,
 };
// Make sure you include prop types for all of your incoming props

export default Cards;