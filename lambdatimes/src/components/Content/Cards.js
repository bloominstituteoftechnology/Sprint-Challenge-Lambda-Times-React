import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {

  render(){
    const allcards = this.props.allcards
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}

          {allcards.map((data, index)   =>  {
                        return  <Card headline={data.headline}  tab={data.tab}  img={data.img} author={data.author}   key={data.index}/>})}
    </div>
  )
}};

// Make sure you include prop types for all of your incoming props

export default Cards;
