import React from 'react';
import PropTypes from 'prop-types';
// import styled from "styled-components";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.img,
  author: PropTypes.string
}

export default Card;
