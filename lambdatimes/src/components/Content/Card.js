import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${props.card.img}`} alt={'card'}/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};



Card.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  auther: PropTypes.string,
}

export default Card;
