import React from 'react';
import Styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const AHeader = Styled.div`
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
const AHeaderH1 = Styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;
const AHeaderSpan = Styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const Date = Styled.span`
  margin-left: 25px;
  flex: 1;
`;
const Temp = Styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <AHeader>
      <AHeaderSpan><Date>SMARCH 32, 2018</Date></AHeaderSpan>
      <AHeaderH1>Lambda Times</AHeaderH1>
      <AHeaderSpan><Temp>98°</Temp></AHeaderSpan>
    </AHeader>
  )
}

export default Header
