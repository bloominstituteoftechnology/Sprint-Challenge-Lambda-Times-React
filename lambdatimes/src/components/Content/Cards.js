import React from 'react'
import Card from './Card'


export default function Cards (props) {
  return (
    <div className="cards-container">
      {
        props.cards.map(Card)
      }
    </div>
  )
}


// ---- Instructions ----

/* 
  Using the cards prop, map over the list creating a 
  new Card component for each passing the card as the only prop.
*/

// Make sure you include prop types for all of your incoming props
