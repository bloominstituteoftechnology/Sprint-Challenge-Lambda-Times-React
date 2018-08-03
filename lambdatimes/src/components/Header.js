import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.div`
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
`;

export const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const HeaderTitle = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

export const HeaderDate = styled.div`
  margin-left: 25px;
  flex: 1;
`;

export const HeaderTemp = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderSpan><HeaderDate>SMARCH 32, 2018</HeaderDate></HeaderSpan>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderSpan><HeaderTemp>98°</HeaderTemp></HeaderSpan>
    </StyledHeader>
  )
}

export default Header;
