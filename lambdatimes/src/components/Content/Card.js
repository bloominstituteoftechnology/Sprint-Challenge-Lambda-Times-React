import React from 'react';
import ProtoTypes from 'proto-types;'


const Card = props => {
  const {headline, author, image} = props.card;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
        <img src={img} alt="image" />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
  headline: PropTypes.string.isRequired,
  author:PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
    })
  )
  }

export default Card;
