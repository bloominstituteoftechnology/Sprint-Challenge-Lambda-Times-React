import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = ({cards}) => {
  return (
    <div className="cards-container">
      {cards.map(({headline, img, author}, i) => <Card headline={headline} img={img} author={author} key={i}/>)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  }))
}

export default Cards;