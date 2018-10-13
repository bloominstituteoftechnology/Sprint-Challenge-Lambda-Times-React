import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div `
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

const Headline = styled.div `
font-size: 25px;
font-family: Didot, serif;
`

const Author = styled.div `
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
margin-top: 15px;
`

const Image = styled.div `
padding-right: 10px;
border-right: 1px solid lightgrey;
height: 40px;
`
const Card = props => {
  return (
    <StyledCard>
      <Headline>{props.card.headline/* headline goes here */}</Headline>
      <Author>
        <Image>
          <img src={props.card.img/* image source goes here */} />
        </Image>
        <span>By {props.card.author/* author goes here */}</span>
      </Author>
    </StyledCard>
  );
};

// Make sure to include PropTypes.

export default Card;
