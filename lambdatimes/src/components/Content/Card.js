import React from "react";
import { timingSafeEqual } from "crypto";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{this.props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={this.props.cards.img} />
        </div>
        <span>By {this.props.cards.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  cards: PropTypes.shape({
    headline: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string
  })
};
export default Card;
