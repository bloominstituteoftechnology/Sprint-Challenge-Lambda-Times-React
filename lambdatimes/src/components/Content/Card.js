import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

const ImgContainerDiv = styled.div`
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
    <CardDiv >
      <HeadlineDiv >{props.card.headline}{/* headline goes here */}</HeadlineDiv>
      <AuthorDiv >
        <ImgContainerDiv >
          <Img src={`${props.card.img}` /* image source goes here */} alt='profilePic'/>
        </ImgContainerDiv>
        <CardSpan>By {props.card.author}{/* author goes here */}</CardSpan>
      </AuthorDiv>
    </CardDiv>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string,
  }),
}

export default Card;
