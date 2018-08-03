import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cards = styled.div`
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

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const ImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const Img = styled.img`
  width: 40px;
`;

const CardSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <Cards>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <Img src={props.card.img} alt='alt-image'/>
        </ImgContainer>
        <CardSpan>By {props.card.author}</CardSpan>
      </Author>
    </Cards>
  )
}

Card.proptypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;