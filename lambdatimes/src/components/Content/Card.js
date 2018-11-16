import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const DivCard = styled.div`
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

const DivHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const DivAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const DivImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const Img = styled.img`
  width: 40px;
`;

const SpanImgContainer = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const Card = props => {
  return (
    <DivCard>
      <DivHeadline>{props.card.headline}</DivHeadline>
      <DivAuthor>
        <DivImgContainer>
          <Img src={props.card.img} alt="" />
        </DivImgContainer>
        <SpanImgContainer>By {props.card.author}</SpanImgContainer>
      </DivAuthor>
    </DivCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  }),
  'get key': PropTypes.func
}

export default Card;
