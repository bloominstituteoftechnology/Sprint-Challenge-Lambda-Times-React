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

const HeadlineContainer = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  img {
      width: 40px;
      padding-right: 10px;
      border-right: 1px solid lightgrey;
      height: 40px;
    }
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const Card = props => {
  return (
    <CardContainer>
      <HeadlineContainer>{props.card.headline}</HeadlineContainer>
      <AuthorContainer>
          <img src={props.card.img} alt="dog-author"/>
        <span>By {props.card.author}</span>
      </AuthorContainer>
    </CardContainer>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  Card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;