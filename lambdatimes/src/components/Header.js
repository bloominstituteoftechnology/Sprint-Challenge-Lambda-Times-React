import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

import styled from 'styled-components';

const HeaderStyle = styled.div`
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
`

const HeaderTitle = styled.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`

const DateStuff = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`

const TempSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-left: 25px;
  flex:1;
`

const Header = () => {
  return (
    <HeaderStyle>
      <DateStuff>SMARCH 32, 2018</DateStuff>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <TempSpan>98°</TempSpan>
    </HeaderStyle>
  )
}

export default Header
