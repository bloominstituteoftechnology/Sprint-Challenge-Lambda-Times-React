import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt={props.headline}/>
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};
Card.propTypes = {
  img: PropTypes.string,
  author: PropTypes.string,
  headline: PropTypes.string,
  tab: PropTypes.string,
  card: PropTypes.object
  };
// Make sure to include PropTypes.

export default Card;
