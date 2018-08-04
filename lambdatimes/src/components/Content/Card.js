import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const CARD=styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const Headline=styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
const Author=styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
const ImgContainer=styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
const Img=styled.img`
  width: 40px;
`
const Span=styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`
const Card = props => {
  return (
    <CARD>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <Img src={props.card.img} alt='card-img'/>
        </ImgContainer>
        <Span>By {props.card.author}</Span>
      </Author>
    </CARD>
  )
}

// Make sure to include PropTypes.
Card.Proptypes={
  card: PropTypes.object.isRequired
}

export default Card;