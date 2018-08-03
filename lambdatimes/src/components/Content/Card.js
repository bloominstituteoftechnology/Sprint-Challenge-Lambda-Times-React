import React from 'react';
import PropTypes from 'prop-types';
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

const Image = styled.img`
  width: 40px;
`;

const AuthorSpan = styled.span`
    padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {

  let card = props.card
  return (
    <CardContainer>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer className="img-container">
          <Image src={`${props.card.img}`} />
        </ImgContainer>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </Author>
    </CardContainer>
  )
}

Card.propTypes = {
  card: PropTypes.object,
  headline: PropTypes.string,
  img: PropTypes.string
};

export default Card;