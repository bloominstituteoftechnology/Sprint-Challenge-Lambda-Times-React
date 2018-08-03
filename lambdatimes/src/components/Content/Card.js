import React from 'react';


const Card = props => {
  const {headline, img, author} = props;
  return (
    <div className="cards-container">
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

// Make sure to include PropTypes.

export default Card;