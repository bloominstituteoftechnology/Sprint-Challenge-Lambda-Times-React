import React from 'react';
import styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Headerdiv = styled.div`
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
const HeaderH1 = styled.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`
const HeaderSapn = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`
const TempSpan = styled.span`
 text-align: right;
  margin-right: 25px;
  flex: 1;
`
const Header = () => {
  return (
    <Headerdiv>
      <HeaderSapn>SMARCH 32, 2018</HeaderSapn>
      <HeaderH1>Lambda Times</HeaderH1>
      <TempSpan>98°</TempSpan>
    </Headerdiv>
  )
}

export default Header