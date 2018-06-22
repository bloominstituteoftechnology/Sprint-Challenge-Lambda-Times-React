import React from 'react';
import styled from 'styled-components'

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
`

const StyledH1 = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const StyledHeaderSpan = styled.div`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`

const StyledHeadSpanDate = StyledHeaderSpan.extend`
  margin-left: 25px;
  flex: 1;
`
const StyledHeadSpanTemp = StyledHeaderSpan.extend`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeadSpanDate>SMARCH 32, 2018</StyledHeadSpanDate>
      <StyledH1>Lambda Times</StyledH1>
      <StyledHeadSpanTemp>98°</StyledHeadSpanTemp>
    </StyledHeader>
  )
}

export default Header