import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderClass = styled.div`
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
`;

const DateClass = styled.span`
align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
margin-left: 25px;
flex: 1;
`;

const TempClass = styled.span`
align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
text-align: right;
margin-right: 25px;
flex: 1;
`;

const H1 = styled.span`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`;

const Header = () => {
  return (
    <HeaderClass>
      <DateClass>SMARCH 32, 2018</DateClass>
      <H1>Lambda Times</H1>
      <TempClass>98°</TempClass>
    </HeaderClass>
  )
}

export default Header