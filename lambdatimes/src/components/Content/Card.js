import React from 'react';
import PropType from 'prop-types';

const Card = props => {
  return (
    <div className="card {props.tab}">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propType = {
  headline: PropType.string,
  tab: PropType.string,
  img: PropType.string,
  author: PropType.string
}

export default Card;
