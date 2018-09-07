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

const HeadlineContainer = styled.div`
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

const DoggoImage = styled.img`
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
      <HeadlineContainer>{props.card.headline}</HeadlineContainer>
      <AuthorDiv>
        <ImgContainerDiv>
          <DoggoImage src={props.card.img} alt='doggo'/> {/*Look up image later on for an alt attribute*/}
        </ImgContainerDiv>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </AuthorDiv>
    </CardDiv>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    imgSrc: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
