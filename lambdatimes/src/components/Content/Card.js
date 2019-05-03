import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ img:imgSrc, author, headline }) {
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={imgSrc} />
        </div>
        <span>By{author}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired
}

// Make sure to include PropTypes.

