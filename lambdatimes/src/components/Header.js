// libraries import
import React from 'react';
import styled from 'styled-components';

const HeaderComp = styled.div`
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

  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const DateSpan = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const TempSpan = styled(DateSpan)`
  margin-left: inherit;
  margin-right: 25px;
  text-align: right;
`;

const Header = () => {
  return (
    <HeaderComp>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <TempSpan>98°</TempSpan>
    </HeaderComp>
  )
}

export default Header