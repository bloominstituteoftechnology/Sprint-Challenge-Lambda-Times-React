import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyle = styled.div`
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

const HeadLine = styled.div`
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

const CardIMGContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const CardIMG = styled.img`
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
    <CardStyle>
      <HeadLine>{props.card.headline}</HeadLine>
      <Author>
        <CardIMGContainer>
          <CardIMG src={props.card.img} />
        </CardIMGContainer>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </Author>
    </CardStyle>
  )
}

// Make sure to include PropTypes.

Card.propTypes = {
  Card: PropTypes.shape({
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string

})
};

export default Card;