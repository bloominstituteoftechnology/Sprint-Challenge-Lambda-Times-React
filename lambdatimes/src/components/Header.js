import React from 'react';
import Style from 'styled-components';

const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <TempSpan>98°</TempSpan>
    </HeaderDiv>
  )
}

export default Header

 /* Component Styles */

const HeaderDiv = Style.div`
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
width: 1280px;
`;

const HeaderH1 = Style.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`;

const DateSpan = Style.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
margin-left: 25px;
flex: 1;
`;

const TempSpan = Style.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
text-align: right;
margin-right: 25px;
flex: 1;
`;
