import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const {headline, img, author} = props.card

  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    hedline: PropTypes.stirng,
    tag: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
}

export default Card;