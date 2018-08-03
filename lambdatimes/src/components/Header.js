import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }

  > h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  > span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

    &:first-child {
      margin-left: 25px;
      flex: 1;
    }

    &:last-child {
      text-align: right;
      margin-right: 25px;
      flex: 1;
    }
  }
`;


const Header = () => {
  return (
    <StyledHeader>
      <span>SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span>98°</span>
    </StyledHeader>
  )
}

export default Header