import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;

  > div {
    &:first-child {
      font-size: 25px;
      font-family: Didot, serif;
    }

    &:last-child {
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      margin-top: 15px;

      > div {
        padding-right: 10px;
        border-right: 1px solid lightgrey;
        height: 40px;

        > img {
          width: 40px;
        }
      }

      > span {
        padding-left: 10px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
      }
    }
  }
`;

const Card = props => {
  return (
    <StyledCard>
      <div>{props.card.headline}</div>
      <div>
        <div>
          <img src={props.card.img} alt="The author of this article." />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </StyledCard>
  )
}

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.string),
};

export default Card;