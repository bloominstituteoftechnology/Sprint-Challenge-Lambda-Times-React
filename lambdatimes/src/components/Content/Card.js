import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


/*
Passed as props from Cards.js

  key={i}
  card={c}

*/

const CardStyles = styled.div`

  ${props => (props.type === 'card' ? `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;` : null)};
 

  ${props => (props.type === 'headline' ? `
    font-size: 25px;
    font-family: Didot, serif;` : null)};

  ${props => (props.type === 'author' ? `
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;` : null)};

  ${props => (props.type === 'img' ? `
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;` : null)};
`

const ImageStyle = styled.img`
  width: 40px;
`

const Span = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  return (
    <CardStyles type="card">

      <CardStyles type="headline">{props.card.headline}</CardStyles>
      <CardStyles type="author">

        <CardStyles type="img">
          <ImageStyle src={props.card.img} />
        </CardStyles>

        <Span>By {props.card.author}</Span>

      </CardStyles>
    </CardStyles>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};

export default Card;
