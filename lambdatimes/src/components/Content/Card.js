import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
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

const HeadlineDiv = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorDiv = styled.div`
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

const AuthorImg = styled.img`
  width: 40px;
`;

const AuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CardDiv>
      <HeadlineDiv>{props.card.headline}{/* headline goes here */}</HeadlineDiv>
      <AuthorDiv>
        <ImgContainer>
          <AuthorImg src={props.card.img /* image source goes here */} alt=''/>
        </ImgContainer>
        <AuthorSpan>By {props.card.author}{/* author goes here */}</AuthorSpan>
      </AuthorDiv>
    </CardDiv>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.img,
}

export default Card;
