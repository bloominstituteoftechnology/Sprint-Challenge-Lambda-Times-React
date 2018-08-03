import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const {img, headline, author} = props.card
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          <div className="card">
          <div className="headline">{headline}</div>
            <div className="author">
              <div className="img-container">
                <img src={img} alt=""/>
              </div>
              <span>By {author}</span>
            </div>
            </div>
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Card.propTypes = {
  card: PropTypes.shape ({
    img: PropTypes.string,
    headline: PropTypes.string,
    author: PropTypes.string,
    tag: PropTypes.string
  })
}

export default Card;