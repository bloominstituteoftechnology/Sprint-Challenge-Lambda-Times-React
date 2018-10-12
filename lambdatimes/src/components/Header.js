import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

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
  z-index: 1000;
  @media (min-width: 1280px) {
      width: 1280px;
  }
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;
  margin: ${props => props.MarginLeft || props.MarginRight};
  text-align: ${props => props.TextLeft || props.TextRight};
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderSpan MarginLeft="0 0 0 25px;" TextLeft="left">MARCH 32, 2018</HeaderSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpan MarginRight="0 25px 0 0;" TextRight="right">98°</HeaderSpan>
    </StyledHeader>
  )
}

export default Header