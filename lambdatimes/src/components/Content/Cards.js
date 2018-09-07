import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        {
          props.cards.map(card => {
            return <Card
              key={card.headline}
              card={card}
            />
          })
        }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
     headline: PropTypes.string, 
     tab: PropTypes.string, 
     img: PropTypes.string, 
     author: PropTypes.string, 
    })
  )
}

export default Cards
