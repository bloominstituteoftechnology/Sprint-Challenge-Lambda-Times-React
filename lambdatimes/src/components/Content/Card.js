import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
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

const Headline = styled.div`
font-size: 25px;
font-family: Didot, serif;
`

const Author = styled.div`
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
`

const IMG = styled.div`
padding-right: 10px;
border-right: 1px solid lightgrey;
height: 40px;

img {
  width: 40px;
}
`

const Card = props => {
  return (
    <CardContainer>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <IMG>
          <img src={props.card.img} alt="author img"/>
        </IMG>
        <span>By {props.card.author}</span>
      </Author>
    </CardContainer>
  );
};

Card.propTypes = {
  card: propTypes.object.isRequired
}
export default Card;
