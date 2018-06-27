import React from "react";
import PropTypes from "prop-types";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img /* image source goes here */} alt="" />
        </div>
        <span>By {card.author /* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string
  })
};

export default Card;
