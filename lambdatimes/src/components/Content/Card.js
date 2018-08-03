import React from 'react';
import PropTypes from 'prop-types'
const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  )
}

Card.propType = {
  headline: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string
}
// Make sure to include PropTypes.

export default Card;