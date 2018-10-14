import React, { Component } from 'react';
import Card from './Card';

const Cards = props.cards.map((card, i)); {
  <div key={card.id}>
  <h3>{card.headline}</h3>
  <p>{card.author}</p>
  </div>
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
// {this.state.instaClonePosts.map((post, i) => {
//   return (
//     <PostContainer
//     handler={this.handleInputChange}  
//     {...post} // spread operator `...` passes all elements in the `post` to `PostContainer`
// // ***** Suspect that {...post} overwrites new comment with old post state
//     />
//   );
// })}