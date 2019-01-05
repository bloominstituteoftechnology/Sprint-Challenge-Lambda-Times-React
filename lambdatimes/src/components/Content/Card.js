// Importing libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const CardComp = styled.div`
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
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const AuthorImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
  img {
    width: 40px;
  }
`;

const Card = props => {
  // destructuring props for readability
  const {card} = {...props};
  return (
    <CardComp className="card">
      <Headline className="headline">{card.headline}</Headline>
      <Author className="author">
        <AuthorImgContainer className="img-container">
          <img src={card.img} alt={card.headline}/>
        </AuthorImgContainer>
        <span>By {card.author}</span>
      </Author>
    </CardComp>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
})};

export default Card;
