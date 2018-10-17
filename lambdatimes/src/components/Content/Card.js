import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardCon = styled.div`
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

const CardConHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CardConAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CardConImgCon = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const CardConImg = styled.img`
  width: 40px;
`;

const CardConAuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CardCon>
      <CardConHeadline>{props.headline}</CardConHeadline>
      <CardConAuthor>
        <CardConImgCon>
          <CardConImg src={props.img} alt="dog" />
        </CardConImgCon>
        <CardConAuthorSpan>By {props.author}</CardConAuthorSpan>
      </CardConAuthor>
    </CardCon>
  );
};

// Make sure to include PropTypes.
Card.proptypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
}

export default Card;
