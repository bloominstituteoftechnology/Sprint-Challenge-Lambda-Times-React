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

const CardHeadlineDiv = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CardAuthorDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  & > span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const CardImgDiv = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  & > img {
    width: 40px;
  }
`;

const Card = props => {
  return (
    <CardDiv>
      <CardHeadlineDiv>{props.card.headline}</CardHeadlineDiv>
      <CardAuthorDiv>
        <CardImgDiv>
          <img src={props.card.img} alt="Article" />
        </CardImgDiv>
        <span>By {props.card.author}</span>
      </CardAuthorDiv>
    </CardDiv>
  )
}

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;