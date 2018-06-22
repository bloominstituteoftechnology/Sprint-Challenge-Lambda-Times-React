import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
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
`
const ImgWrapper = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
const Img = styled.img`
  width: 40px;

`
const AuthorName = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  return (
    <CardWrapper>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgWrapper>
          <Img src={props.card.img} />
        </ImgWrapper>
        <AuthorName>By {props.card.author}</AuthorName>
      </Author>
    </CardWrapper>
  )
}

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card;