import React from 'react';
import styled from 'styled-components';
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  height: 120px;
  margin-top: 44px;
  @media(min-width: 1280px){
    width: 1280px;
  }
`
const StyledH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: black;
`
const StyledSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const StyledTemp = StyledSpan.extend`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const StyledDate = StyledSpan.extend`
  margin-left: 25px;
  flex: 1;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledDate>SMARCH 32, 2018</StyledDate>
      <StyledH1>Lambda Times</StyledH1>
      <StyledTemp>98°</StyledTemp>
    </StyledHeader>
  )
}

export default Header