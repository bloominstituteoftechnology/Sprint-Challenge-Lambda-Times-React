import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = props => {
  console.log("In Card-component : ",props);
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.cardToDisplay.headline}</div>
      <div className="author">
        <div className="img-container">
          <img alt = "image" src={props.cardToDisplay.img /* image source goes here */} />
        </div>
        <span>By {/* author goes here */props.cardToDisplay.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card :  PropTypes.shape({
              author : PropTypes.string,
              headline : PropTypes.string,
              img : PropTypes.string,
              tab : PropTypes.string,
  })
};


export default Card;


