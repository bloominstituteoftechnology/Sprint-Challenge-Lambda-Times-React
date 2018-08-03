import React from 'react';
import { cardData } from '../../data';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const CardStyled = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;
const CardHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CardAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const CardImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
  img{
    width:40px;
  }
`;




const Card = props => {
  return (
    
    <CardStyled> 
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor>
        <CardImgContainer>
        
          <img src={props.card.img} />
        </CardImgContainer>
        <span>By {props.card.author}</span>
      </CardAuthor>
    </CardStyled>
  )
}

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.string)
}

export default Card;