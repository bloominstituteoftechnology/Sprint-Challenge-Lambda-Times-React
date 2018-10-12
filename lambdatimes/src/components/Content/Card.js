import React from 'react';
import PropTypes from 'prop-types'
import Styled from 'styled-components'


const CardDiv = Styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const HeadLine = Styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
const Author = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;  
`

const ImageContainer = Styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
const InnerImage = Styled.img`
  width: 40px;
`
const Span = Styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  return (
    <CardDiv>
      <HeadLine>{props.card.headline}</HeadLine>
      <Author>
        <ImageContainer>
          <InnerImage src={props.card.img} />
        </ImageContainer>
        <Span>By {props.card.author}</Span>
      </Author>
    </CardDiv>
  );
};

Card.propTypes = {
  card:PropTypes.shape(
                        {
                          headline:PropTypes.string,
                          tab:PropTypes.string,
                          img:PropTypes.string,
                          author:PropTypes.string
                        }
                      )
}

export default Card;
