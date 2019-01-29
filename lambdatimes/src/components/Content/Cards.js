import React, { Component } from 'react';
import PropTypes from 'prop-types'; // loads PropTypes validation library
import Card from './Card';
// import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card, index)=> <Card key={index} card={card}/>)}

    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Card.propTypes = {
  cards: PropTypes.array // validates prop-type is array
}
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