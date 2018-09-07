import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardInfo.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardInfo.img } />
        </div>
        <span>By {props.cardInfo.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

export default Card;
