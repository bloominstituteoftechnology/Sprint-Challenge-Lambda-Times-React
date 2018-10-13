import React from 'react';
import Styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
// const flexStyle = {
//   display:flex,
//   flexDirection: row,
//   alignItems: center,
//   justifyContent: space-between
  
// };

const HeaderWrapper = Styled.div`
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
const TitleWrapper = Styled.h1`
  font-size; 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;
const DateWrapper = Styled.span`
  margin-left: 25px;
  flex: 1;
`;
const TempWrapper = Styled.span`
  text-align: right;
  margin-right; 25px;
  flex: 1;
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <DateWrapper>MARCH 32, 2018</DateWrapper>
      <TitleWrapper>Lambda Times</TitleWrapper>
      <TempWrapper>98°</TempWrapper>
    </HeaderWrapper>
  )
}

export default Header