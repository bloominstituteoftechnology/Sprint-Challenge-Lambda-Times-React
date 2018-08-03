import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { headline, tab, img, author } = props;
  const cardClassName = `card ${tab}`;
  return (
    <div className={ cardClassName }>
      <div className="headline">{ headline }</div>
      <div className="author">
        <div className="img-container">
          <img src={ img } />
        </div>
        <span>By { author }</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  headline:PropTypes.string.isRequired,
  tab:PropTypes.string.isRequired,
  img:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired
}

export default Card;