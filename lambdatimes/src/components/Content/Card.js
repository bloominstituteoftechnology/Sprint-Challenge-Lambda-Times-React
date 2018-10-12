import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";

export const AniCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
  animation: expand .5s 1 cubic-bezier(.75,-0.5,0,1.75);

@keyframes expand {
  from {
    width: 10px;
    height: 10px;
    opacity: 0;
    transform: translate(10px, 10px); 
  
  }
  to {
    
    
  }
}

`;
const Card = props => {
  return (
    <AniCard>
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${props.src}`} />
        </div>
        <span>By {props.author}</span>
      </div>
      </AniCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  author: PropTypes.string,
  headline: PropTypes.string,
  src: PropTypes.string

}
export default Card;
/* CitiesList.propTypes = {
	cities: PropTypes.array.isRequired
}; */