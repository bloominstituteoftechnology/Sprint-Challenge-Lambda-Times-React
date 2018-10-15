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
`

const StyledSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`

const StyledDate = styled(StyledSpan)`
  margin-left: 25px;
  flex: 1;
`
const StyledH1 = styled.h1 `
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const StyledTemp = styled(StyledSpan)`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    // <div className="header">
    //   <span className="date">SMARCH 32, 2018</span>
    //   <h1>Lambda Times</h1>
    //   <span className="temp">98°</span>
    // </div>
    <StyledHeader>
      <StyledDate>SMARCH 32, 2018</StyledDate>
      <StyledH1>Lambda Times</StyledH1>
      <StyledTemp>98°</StyledTemp>
    </StyledHeader>
  )
}

export default Header