import React from 'react';
import PropTypes from "prop-types";
import Cards from "./Cards";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} />
        </div>
        <span>By {props.card.author/* author goes here */}</span>
      </div>
    </div>
  );
};
Card.propTypes={

    card:PropTypes.shape({
        headline:PropTypes.string.isRequired,
        tab:PropTypes.number,
        author:PropTypes.arrayOf(PropTypes.string),



    })
}
// Make sure to include PropTypes.

export default Card;
