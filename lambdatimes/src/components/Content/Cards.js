import React, { Component } from 'react';
import Card from './Card';
import data from '../../data.js';


componentDidMount() {
  this.setState({ Cards: data });
};


click = event => {
  event.preventDefault ();
  let event [...new.state.cards];
  newPosts = newPosts.filter(post => {
    if (post.username === this.state.search) {
      return post;
    }
    if (post.username !== this.state.search){
      return search;
    }
    
}

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}



// Make sure you include prop types for all of your incoming props

export default Cards;