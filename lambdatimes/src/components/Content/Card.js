import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './Content.css'

const StyledCard = styled.div `
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: space-between;
align-items: none;
flex-direction: column;
background-color: orange;
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

const ImageContainer = styled.div `
padding-right: 10px;
border-right: 1px solid lightgrey;
height: 40px;
`

const Image = styled.img `
width: 40px;
`

const Span = styled.span`
padding-left: 10px;
font-size: 12px;
letter-spacing: 1px;
font-weight: bold;
`
const Card = props => {
  return (
    <StyledCard>
      <Headline>{props.card.headline/* headline goes here */}</Headline>
      <Author>
        <ImageContainer>
          <Image src={props.card.img/* image source goes here */} />
        </ImageContainer>
        <Span>By {props.card.author/* author goes here */}</Span>
      </Author>
    </StyledCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img:PropTypes.string,
    author:PropTypes.string,
  })

  }
export default Card;
