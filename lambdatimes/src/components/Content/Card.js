import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cards.headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cards.img/* image source goes here */} />
        </div>
        <span>By {props.cards.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab:  PropTypes.string,
      img:  PropTypes.string,
      author: PropTypes.string
    })
  )
}
export default Card;
