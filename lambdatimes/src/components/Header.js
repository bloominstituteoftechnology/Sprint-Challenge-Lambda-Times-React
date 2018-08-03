import React from 'react';
import style from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderDiv = style.div`
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

const HeaderH1 = style.h1`
    font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderDate = style.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
    margin-left: 25px;
  flex: 1;
`;

const HeaderTemp = style.span`
    text-align: right;
  margin-right: 25px;
  flex: 1;
`;

// const Header

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderDiv>
  )
}

export default Header